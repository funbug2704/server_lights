const express = require("express");
const router = express.Router();
const testController = require("../controller/testController");

router.post("/Test", testController.createTest);
router.get("/getTest", testController.getTests);

module.exports = router;
