const express = require("express");
const router = express.Router();
const diaryController = require("../controller/diaryController");

router.post("/newDiary", diaryController.insertDiary);
router.get("/getDiaryById", diaryController.getDiaryById);
router.post("/deleteDiary", diaryController.deleteDiary);

module.exports = router;
