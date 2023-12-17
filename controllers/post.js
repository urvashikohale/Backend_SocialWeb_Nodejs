const Post = require("../models/post");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");

exports.getPostById = (req, res, next, id) => {
  Post.findById(id)
    .populate("postedBy", "_id name")
    .exec()
    .then((post) => {
      (req.post = post), next();
    })
    .catch((err) => {
      res.json({
        err: "No POST Found",
      });
    });
};

exports.createPost = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        err: "Problem with PHOTO",
      });
    }
    //destructure the fields
    const { postImage, postDescription } = fields;

    let post = new Post(fields);

    post.postedBy = req.profile;

    if (file.postImage) {
      if (file.postImage.size > 3000000) {
        return res.status(400).json({
          err: "File size too big",
        });
      }

      post.postImage.data = fs.readFileSync(file.postImage[0].filepath);
      post.postImage.contentType = file.postImage[0].mimetype;
    }

    post
      .save()
      .then((post) => {
        res.json({
          post,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({
          err: "Saving photo in DB failed",
        });
      });
  });
};
exports.postByUser = (req, res) => {
  Post.find({ postedBy: req.profile._id })
    .populate("postedBy", "_id name")
    .sort("-createdAt")
    .exec()
    .then((posts) => {
      res.json(posts);
    })
    .catch((error) => {
      res.status(400).json({
        error: "SOMETHING WENT WRONG",
      });
    });
};

exports.getAllPosts = (req, res) => {
  Post.find()
    .select("-postImage")
    .sort("-createdAt")

    .exec()
    .then((post) => {
      res.json(post);
    })
    .catch((error) => {
      res.status(400).json({
        error: "NO post FOUND",
      });
    });
};

exports.deletePost = (req, res) => {
  let post = req.post;
  post
    .deleteOne()
    .then((deletedPost) => {
      res.json({
        message: "Post Deleted Successfully",
        deletedPost,
      });
    })
    .catch((err) => {
      res.status(400).json({
        err: "Failed to delete post",
      });
    });
};

exports.createComment = (req, res) => {
  const { userId, postId } = req.params;

  const { text } = req.body;

  const newComment = {
    text,
    postedCommentBy: userId,
  };
  Post.findByIdAndUpdate(postId, { $push: { newComment } }, { new: true })
    .populate("comments.postedCommentBy", "_id name")
    .populate("postedBy", "_id name")
    .exec()
    .then((comment) => {
      res.json(comment);
    })
    .catch((err) => {
      res.status(400).json({
        err: "Failed to comment",
      });
    });
};
