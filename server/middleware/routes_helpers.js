const TravelStory = require("../models/TravelStory");

module.exports = {
  getTravelStories: async (req, res) => {
    try {
      const travels = await TravelStory.find().lean();
      res.status(200).json(travels);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
},

createTravelStory: async (req, res) => {
    try {
        const newTravel = req.body;
        await TravelStory.create(newTravel);
        res.status(201).json(newTravel);
    } catch (error) {
      console.error(error);
      res.status(409).json({ message: error.message });
    }
  },
};
