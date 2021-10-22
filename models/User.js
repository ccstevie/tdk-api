const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: true,
    },
    school: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    faculty: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    profilePicture: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);