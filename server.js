require("dotenv").config();

const express = require("express");
const cors = require("cors");

// Tweeter database
const connectDB = require("./dbinit");
connectDB();

const app = express();

const PORT = process.env.PORT || 8080;

const twitter = require("./routes/twitterRoutes");

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", twitter);

app.get("/", (req, res) => {
  res.send("Welcome to Twitter backend API");
});
