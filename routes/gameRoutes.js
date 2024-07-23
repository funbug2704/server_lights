const express = require("express");
const router = express.Router();
const gameController = require("../controller/gameController");

router.get("/Game", gameController.getGame);

module.exports = router;
