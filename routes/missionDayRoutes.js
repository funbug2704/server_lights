const express = require("express");
const router = express.Router();
const MissionDayController = require("../controller/MissionDayController");

router.post("/MissionDay", MissionDayController.createMissionDay);
router.get("/getMissionDayById/:id", MissionDayController.getMissionDayById);
router.put("/updateMissionDayById/:id", MissionDayController.updateMissionDayById);

module.exports = router;
