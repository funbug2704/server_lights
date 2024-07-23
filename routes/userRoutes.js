const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.post("/register", userController.createUser);
router.post("/login", userController.loginUser);
router.get("/user/getInfor/:id", userController.getUser);
router.post("/user/checkEmail", userController.checkExistedEmail);
router.get("/user/getData/:id", userController.getUserDataById);
router.post("/user/checkEmailAndPhone", userController.checkExistedEmailAndPhoneNumber);
router.post("/user/updatePassword", userController.updatePassword);
router.get("/user/getAllUser/:id", userController.getAllUser);
router.put('/user/update-name/:id', userController.updateName);
router.put('/user/update-phone/:id', userController.updatePhoneNo);
router.put('/user/update-dob/:id', userController.updateDOB);
router.put('/user/update-address/:id', userController.updateAddress);
router.put('/userdata/update-bio/:id', userController.updateBio);
router.put('/user/update-noti/:id', userController.updateNoti);
router.put('/userdata/update-social/:id', userController.updateSocialConnection);

module.exports = router;
