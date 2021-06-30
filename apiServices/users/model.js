const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      lowercase: true,
      required: [true, "Campo obligatorio"],
      // regex para no admitir caracteres extraños
      match: [/^[a-zA-Z0-9]+$/, "es inválido"],
      index: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
        type: String,
        required: true,
      },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: [true, "Campo obligatorio"],
      match: [/\S+@\S+\.\S+/, "Email invalido"],
      index: true,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
    },
    hash: String,
    salt: String,
  },
  {
    timestamps: true,
    collection: "Users",
  }
);

userSchema.pre('save', function(next) {
    bcrypt.genSalt(10).then(salts => {
        bcrypt.hash(this.password, salts).then(hash => {
            this.password = hash;
            next();
        }).catch(error => next(error));
    }).catch(error =>next(error));
})

userSchema.methods.publicData = function(){
    return {
      id: this.id,
      username: this.username,
      name: this.name,
      isAdmin: this.isAdmin,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      image: this.image,
      description: this.description,
      email: this.email,
    };
  };

  userSchema.methods.responseUserCreation = function(){
    return {
      username: this.username,
      state: "User registration successfully"
    };
  };

  userSchema.methods.getJWT = function() {
    const token = jwt.sign({ id: this._id, username:this.username }, process.env.JWT_SECRET, {
        expiresIn: "30m"
      });
      return token;
  };

userSchema.plugin(uniqueValidator, { message: "Ya existe" });

module.exports = mongoose.model("User", userSchema);
