const mongoose = require("mongoose");

const { Schema } = mongoose;

const twitterSchema = new Schema({
  // name, post, likes, createdAt
  name: {
    type: String,
    required: true,
  },

  post: {
    type: String,
    required: true,
  },

  likes: {
    type: Number,
    default: 0,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Twitter", twitterSchema);
