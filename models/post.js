const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema; //ObjectId is used for childSchema

const postSchema = new mongoose.Schema({
  postImage: {
    data: Buffer,
    contentType: String,
  },
  postDescription: {
    type: [String],
    trim: true,
    maxlength: 2000,
  },
  comments: [
    {
      text: String,
      createdAt: { type: Date, default: Date.now },
      postedCommentBy: { type: ObjectId, ref: "User" },
    },
  ],
  postedBy: { type: ObjectId, ref: "User" },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Post", postSchema);
