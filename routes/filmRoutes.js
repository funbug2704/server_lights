const express = require("express");
const router = express.Router();
const filmController = require("../controller/filmController");

router.get("/Film", filmController.getFilm);

module.exports = router;
