const Twitters = require("../model/Twitter");

const getAllTwitters = async (req, res) => {
  try {
    const twitters = await Twitters.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      twitters,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch all Twitters",
      error,
    });
  }
};

const createTwitter = async (req, res) => {
  try {
    const { name, post } = req.body;
    const twitter = await Twitters.create({ name, post });
    res.status(201).json({
      success: true,
      twitter,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Invalid data - failed to create a new Twitter",
      error,
    });
  }
};

const updateLikes = async (req, res) => {
  try {
    const twitter = await Twitters.findByIdAndUpdate(
      { _id: req.params.id },
      { $inc: { likes: 1 } },
      { new: true }
    );
    res.status(200).json({ success: true, twitter });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update likes",
      error,
    });
  }
};

module.exports = {
  getAllTwitters,
  createTwitter,
  updateLikes,
};
