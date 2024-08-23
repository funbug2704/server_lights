const MissionDay = require("../models/MissionDay");
const Level_depression = require("../models/Level_Depression");
const Mission = require("../models/Mission");

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

module.exports = {
  createMissionDay: async (req, res) => {
    try {
      const { userId } = req.body;

      // Delete all MissionDay records for this user
      await MissionDay.deleteMany({ userId });

      // Find the Level_depression record for the user
      let Level_Depression = await Level_depression.findOne({ userId });

      // If no record exists, create a new one with level 3
      if (!Level_Depression) {
        Level_Depression = new Level_depression({ userId, level: 3 });
        await Level_Depression.save();
      }

      // Find missions based on the user's depression level
      const Missions = await Mission.find({ emotion: Level_Depression.level });
      shuffleArray(Missions);

      const randomMissions = Missions.slice(0, 4);
      const missionDayRecords = [];

      for (let i = 0; i < randomMissions.length; i++) {
        const missionId = randomMissions[i]._id;

        // Create a new MissionDay record
        const missionDayRecord = new MissionDay({
          userId: userId,
          missionId: missionId,
        });

        // Save the new record to the database
        await missionDayRecord.save();

        // Add the record to the array
        missionDayRecords.push(missionDayRecord);
      }

      res.status(200).json(missionDayRecords);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  getMissionDayById: async (req, res) => {
    try {
      const userId = req.params.id;
      const missionDays = await MissionDay.find({ userId })
        .populate({
          path: "missionId",
          model: "Mission",
          select: "description",
        });

      if (!missionDays) {
        return res.status(404).json({ message: "MissionDay not found" });
      }

      res.status(200).json(missionDays);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateMissionDayById: async (req, res) => {
    try {
      const updatedMissionDay = await MissionDay.findByIdAndUpdate(
        req.params.id,
        { $set: { checkCompleted: true } },
        { new: true }
      );

      if (!updatedMissionDay) {
        return res.status(404).json({ status: false });
      }

      res.status(200).json({ status: true });
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
