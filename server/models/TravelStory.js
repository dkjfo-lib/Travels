const mongoose = require("mongoose");

const TravelStorySchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  image: String,
  tags: [String],
  likes: {
      type: Number,
      default: 0
  },
  createdAt: {
      type: Date,
      default: Date.now()
  }
});

const TravelStory = mongoose.model('TravelStory', TravelStorySchema)

module.exports = TravelStory;
