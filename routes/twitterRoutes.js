const express = require("express");

const app = express.Router();

const {
  getAllTwitters,
  createTwitter,
  updateLikes,
} = require("../controllers/twitterController");

app.route("/").get(getAllTwitters).post(createTwitter);
app.route("/:id").put(updateLikes);

module.exports = app;
