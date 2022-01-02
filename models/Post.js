const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    collaborators: {
      type: Array,
      default: [],
    },
    tags: {
      type: Array,
      default: [],
    },
    competencies: {
      type: Array,
      default: [],
    },
    desc: {
      type: String,
      max: 500,
    },
    body: {
      type: String,
      max: 500,
    },
    postPic: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);