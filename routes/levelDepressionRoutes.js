const express = require("express");
const router = express.Router();
const Level_DepressionController = require("../controller/Level_DepressionController");

router.get("/levelDepressionById/:id", Level_DepressionController.getLevelDepressionById);
router.post("/levelDepression", Level_DepressionController.createLevelDepression);
router.post("/updateLevelDepression", Level_DepressionController.updateLevelDepression);

module.exports = router;