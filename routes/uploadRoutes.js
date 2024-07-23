const express = require("express");
const router = express.Router();
const imageController = require("../controller/imageController");
const uploadCloud = require('../middleware/upload');

router.post('/upload', uploadCloud.single('image'), imageController.Upload);

module.exports = router;
