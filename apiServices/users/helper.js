const mongoose = require('mongoose');
const User = mongoose.model('User');

async function getAllUsers() {
    let users, array = [];
    users = await User.find({}, function(err, users) {
        users.forEach(function(user) {
			array.push(user.publicData());
		});
    })
    return array;
}

async function deleteUser(id) {
    let deletedUser = User.findByIdAndDelete(id);
    return deletedUser;
}

async function findUserById(id) {
    let userData;
    let user = await User.findById(id, function(err, user) {
        userData = user.publicData();
    });
    return userData;
}

async function findUserByIdAndUpdate(id, updateObject) {
    const { username, name, email, isAdmin } = updateObject;
    let change = {};
    if (typeof username !== 'undefined') change.username = username;
    if (typeof name !== 'undefined') change.name = name;
    if (typeof email !== 'undefined') change.email = email;
    if (typeof isAdmin !== 'undefined') change.isAdmin = isAdmin;
    let updatedUser = await User.findByIdAndUpdate(id, 
        change)
    return updatedUser;
}


async function findUserByUsername(username, password) {
    let user = await User.findOne({username});
    console.log(user);
    return user;
}

module.exports = { getAllUsers, deleteUser, findUserById, findUserByIdAndUpdate, findUserByUsername };