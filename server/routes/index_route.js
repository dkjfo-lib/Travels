const express = require("express");
const { getTravelStories, createTravelStory } = require("../middleware/routes_helpers");
const router = express.Router();

// @desc    All travel posts display page
// @route   GET api/
router.get("/", getTravelStories);

// @desc    Create new post
// @route   POST api/
router.post("/", createTravelStory);

module.exports = router;
