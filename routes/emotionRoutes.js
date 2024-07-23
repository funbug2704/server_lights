const express = require("express");
const router = express.Router();
const EmotionController = require("../controller/EmotionController");

router.post("/emotion", EmotionController.createEmotion);
router.get("/getEmotionById/:id", EmotionController.getEmotionById);
router.get("/emotionChart/:id", EmotionController.emotionChart);

module.exports = router;
