const mongoose = require("mongoose");
const User = mongoose.model("User");
module.exports = function (req, res, next) {
  User.findById(req.user.id, function (err, user) {
    user.isAdmin === true ? console.log("User is admin and has the authorization") : console.log("User is not admin and does not have authorization");
    res.locals.user = user;
    next();
  });
};
