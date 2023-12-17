const User = require("../models/user");

exports.getUserById = (req, res, next, id) => {
  User.findById(id)
    .exec()
    .then((user) => {
      req.profile = user;
      next();
    })
    .catch((err) => {
      res.status(400).json({
        error: "No user was found in db",
      });
    });
};

exports.getUserProfile = (req, res) => {
  req.profile.salt = undefined;
  req.profile.encry_password = undefined;
  req.profile.createdAt = undefined;
  req.profile.updatedAt = undefined;
  return res.json(req.profile);
};

exports.updateUserProfile = (req, res) => {
  User.findByIdAndUpdate(
    { _id: req.profile._id },
    { $set: req.body },
    { new: true, useFindAndModify: false }
  )
    .then((user) => {
      user.salt = undefined;
      user.encry_password = undefined;

      res.json(user);
    })
    .catch((error) => {
      res.status(400).json({
        error: "You are not authorized",
      });
    });
};
