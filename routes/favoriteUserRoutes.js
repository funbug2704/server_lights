const express = require("express");
const router = express.Router();
const favorite_userController = require("../controller/favorite_userController");

router.post("/favoriteUser", favorite_userController.createFavoriteUser);
router.get("/getFavoriteUserById", favorite_userController.getFavoriteUserById);
router.post("/deleteFavoriteUser", favorite_userController.deleteFavoriteUser);

module.exports = router;
