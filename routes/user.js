const express = require("express");
const router = express.Router();

const {
  getUserById,
  getUserProfile,
  updateUserProfile,
} = require("../controllers/user");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");

//route for userId param
router.param("userId", getUserById);

//create route
//create user is done in signup route

//get route
//route to get user profile
router.get("/user/:userId", isSignedIn, isAuthenticated, getUserProfile);

//update route
//route to update user profile
router.put("/user/:userId", isSignedIn, isAuthenticated, updateUserProfile);

module.exports = router;
