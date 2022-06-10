const express = require("express");
const { getTravelStories, createTravelStory } = require("../middleware/routes_helpers");
const router = express.Router();

// @desc    All travels display page
// @route   GET /
router.get("/", getTravelStories);

// @desc    All travels display page
// @route   GET /
router.post("/", createTravelStory);

module.exports = router;
