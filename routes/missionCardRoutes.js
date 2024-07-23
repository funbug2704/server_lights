const express = require("express");
const router = express.Router();
const MissionCardController = require("../controller/MissionCardController");

router.post("/regisCard", MissionCardController.createData);
router.put("/scanCard/:id", MissionCardController.scanCard);
router.put("/updateCard/:id", MissionCardController.updateCard);
router.get("/getUserCard/:id", MissionCardController.getUserCard);

module.exports = router;
