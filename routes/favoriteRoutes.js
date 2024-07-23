const express = require("express");
const router = express.Router();
const favoriteController = require("../controller/favoriteController");

router.get("/favorite", favoriteController.getFavorites);

module.exports = router;
