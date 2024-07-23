const express = require("express");
const router = express.Router();
const songController = require("../controller/songController");

router.get("/Song", songController.getSong);

module.exports = router;
