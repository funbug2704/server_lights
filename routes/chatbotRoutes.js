const express = require("express");
const router = express.Router();
const ChatbotController = require("../controller/chatbotController");

router.post("/Chatbot", ChatbotController.Chatbot);

module.exports = router;
