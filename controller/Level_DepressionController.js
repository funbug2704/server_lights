const Level_depression = require("../models/Level_Depression");
const Emotion = require("../models/Emotion");
const Test = require("../models/Test");

module.exports = {
  createLevelDepression: async (req, res) => {
    try {
      const { userId, level } = req.body;

      const newLevelDepression = new Level_depression({ userId, level });
      const savedLevelDepression = await newLevelDepression.save();

      res.status(200).json(savedLevelDepression);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getLevelDepressionById: async (req, res) => {
    try {
      const levelDepression = await Level_depression.findById(req.params.id);

      if (!levelDepression) {
        return res.status(404).json({ message: "Level_depression không tồn tại" });
      }

      res.status(200).json(levelDepression);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateLevelDepression: async (req, res) => {
    try {
      const { userId } = req.body;

      // Fetch the test data for the user
      const tests = await Test.findOne({ userId });
      let testAverage = tests ? tests.level : null;

      // Calculate the average emotion for the user
      const emotions = await Emotion.find({ userId });
      let emotionAverage = 0;
      for (let i = 0; i < emotions.length; i++) {
        emotionAverage += emotions[i].emotion / emotions.length;
      }

      // Calculate the final result
      let result;
      if (testAverage !== null) {
        result = (testAverage + emotionAverage) / 2;
      } else {
        result = emotionAverage;
      }
      let roundedResult = Math.ceil(result);

      // Find or create the Level_depression record for the user
      let updatedLevelDepression = await Level_depression.findOneAndUpdate(
        { userId: userId },
        { $set: { level: roundedResult } },
        { new: true }
      );

      if (!updatedLevelDepression) {
        // If no record exists, create one
        const newLevelDepression = new Level_depression({ userId, level: roundedResult });
        updatedLevelDepression = await newLevelDepression.save();
      }

      res.status(200).json(updatedLevelDepression);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  deleteLevelDepression: async (req, res) => {
    try {
      const deletedLevelDepression = await Level_depression.findByIdAndRemove(req.params.id);

      if (!deletedLevelDepression) {
        return res.status(404).json({ message: "Level_depression không tồn tại" });
      }

      res.status(204).json();
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
