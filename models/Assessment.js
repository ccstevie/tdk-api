const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: {
        type: String,
        required: true,
    },
    ethics: {
        type: String,
        required: true,
    },
    interpret: {
        type: String,
        required: true,
    },
    visualize: {
        type: String,
        required: true,
    },
    designPrinciples: {
        type: String,
        required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Assessment", PostSchema);