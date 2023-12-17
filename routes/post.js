const express = require("express");
const router = express.Router();

const {
  getPostById,
  createPost,
  getAllPosts,
  postByUser,
  deletePost,
  comment,
  createComment,
} = require("../controllers/post");
const { getUserById } = require("../controllers/user");
const { isSignedIn, isAuthenticated } = require("../controllers/auth");

//userId param route
router.param("userId", getUserById);

//postId param route
router.param("postId", getPostById);

//Post route
//create post route
router.post("/posts/new/:userId", isSignedIn, createPost);

//Get route
//get post posted by specific user
router.get("/posts/by/:userId", isSignedIn, isAuthenticated, postByUser);

//get all the posts
router.get("/posts", getAllPosts);

//Delete route
//delete post
router.delete("/post/:userId/:postId", isSignedIn, isAuthenticated, deletePost);

//writing comment on post
router.put("/post/:userId/:postId", isSignedIn, createComment);

module.exports = router;
