const {response, request} = require('express');
const UserModel = require("../users/model");
const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');

const usersGet = async (req, res) => {

    let array = [];
    await User.find({}, function(err, users) {
        if(err || !users) {
            return res.status(400).json({
                message: `No match was found`
              }); 
        } 
        users.forEach(function(user) {
			array.push(user.publicData());
		});
    })

    return res.status(200).json(array);
}

const usersPost = async (req, res) => {
    const { name, username, email, password, description } = req.body;

    const isAdmin = false;
     delete password;
     try {
     const user = await new UserModel({
         name,
         username,
         email,
         password,
         isAdmin,
         image : req.file.path,
         description,
     }).save();
         res.status(201).json(user.responseUserCreation());
     } catch(e) {
         console.error(e);
         res.status(400).json({
             message: "Error, invalid information"
           });
     }
}

const usersDelete = async (req, res) => {
    const id = req.params.id;
    const userAuthenticated = res.locals.user;
	if (userAuthenticated.id === id || userAuthenticated.isAdmin === true) {
    try {
    await User.findByIdAndDelete(id, function(err, user) {
        if(err || user == 'undefined') {
            return res.status(400).json({
                message: `No match was found with id ${id}`
              });
        }
    });
    return res.status(200).json({
        message: `User with id ${id} was deleted`
      });
    } catch(e) {
        console.error(e);
    }
} else {
    return res.status(401).json({message: 'You dont have the authorization to delete this user'});
}
}

const userGetById = async (req, res) => {
    const id = req.params.id;
    try {
    await User.findById(id, function(err, user) {
        if(err || !user) {
            console.error(err);
            return res.status(400).json({
                message: `No match was found with id ${id}`
              });
        }
        userData = user.publicData();
    });
    } catch(e) {
        console.error(e);
    }
    return res.status(200).json(userData);
}


const usersPut = async (req, res) => {
    const { username, name, email, isAdmin, description, image } = req.body;
    const id = req.params.id;
    const userAuthenticated = res.locals.user;
    if (userAuthenticated.id === id || userAuthenticated.isAdmin === true) {
    let change = {};
    if (typeof username !== 'undefined') change.username = username;
    if (typeof name !== 'undefined') change.name = name;
    if (typeof email !== 'undefined') change.email = email;
    if (typeof isAdmin !== 'undefined') change.isAdmin = isAdmin;
    if (typeof description !== 'undefined') change.description = description;
    if (typeof image !== 'undefined') {
    var diskStream = fs.createWriteStream(path.join(__dirname, 'public/uploads', image));
    req.pipe(diskStream).on('finish', function() {

    });
}
    let updatedUser = await User.findByIdAndUpdate(id, change, function(err, user) {
        if (err || Object.keys(change).length === 0) return res.status(400).json({
            message: `There was an error during modification`
          });
    });
    return res.status(200).json({
        message: `User ${updatedUser.username} with id ${id} was updated successfully`
      });
    } else {
        return res.status(401).json({message: 'You dont have the authorization to update this user'});
    }
}

const LogInUser = (req, res) => {
    const { username, password } = req.body;
    User.findOne({username})
    .then(user => {
        if(!user) return res.status(400).json({
            message: `User does not exist`
          });
          bcrypt.compare(password, user.password)
          .then(match => {
              if(match) return res.status(200).json({id: user._id, username: user.username, name: user.name, email: user.email, isAdmin: user.isAdmin, image: user.image, description: user.description, token: user.getJWT()});
              return res.status(400).json({message: "Wrong Password"});
          }).catch(error => {
              console.error(error);
              res.status(500).json({message: error})
          });
    }).catch(error => {
        console.error(error);
        res.status(500).json({message: error})
    });
}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete,
    userGetById,
    LogInUser
}