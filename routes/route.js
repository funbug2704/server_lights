const express = require("express");
const app = express.Router();
const userController = require("../controller/userController");
const diaryController = require("../controller/diaryController");
const EmotionController = require("../controller/EmotionController");
const favorite_userController = require("../controller/favorite_userController");
const favoriteController = require("../controller/favoriteController");
const Level_DepressionController = require("../controller/Level_DepressionController");
const missionController = require("../controller/missionController");
const MissionDayController = require("../controller/MissionDayController");
const testController = require("../controller/testController");
const ChatbotController = require("../controller/chatbotController");
const filmController = require("../controller/filmController");
const gameController = require("../controller/gameController");
const { createUserDateActivity, getUserDateActivitiesByUserId, getUserDateActivityById, deleteUserDateActivityById, updateUserDateActivity, getUserDateActivity } = require('../controller/dateDataController');
const imageController = require("../controller/imageController");
const { addMessage, getMessages } = require("../controller/messageController");
const songController = require("../controller/songController");
const MissionCardController = require("../controller/MissionCardController");
const uploadCloud = require('../middleware/upload')

// Route cho user
app.post("/register", userController.createUser);
app.post("/login", userController.loginUser);
app.get("/user/getInfor/:id", userController.getUser);
app.post("/user/checkEmail", userController.checkExistedEmail);
app.get("/user/getData/:id", userController.getUserDataById);
app.post("/user/checkEmailAndPhone", userController.checkExistedEmailAndPhoneNumber);
app.post("/user/updatePassword", userController.updatePassword);
app.get("/user/getAllUser/:id", userController.getAllUser);

// Route cho Diary
app.post("/newDiary", diaryController.insertDiary);
app.get("/getDiaryById", diaryController.getDiaryById);
app.post("/deleteDiary", diaryController.deleteDiary);

// Router cho Emotion
app.post("/emotion", EmotionController.createEmotion);
app.get("/getEmotionById/:id", EmotionController.getEmotionById);
app.get("/emotionChart/:id", EmotionController.emotionChart);

// Router cho Favorite cua User
app.post("/favoriteUser", favorite_userController.createFavoriteUser);
app.get("/getFavoriteUserById", favorite_userController.getFavoriteUserById);
app.post("/deleteFavoriteUser", favorite_userController.deleteFavoriteUser);

// Router cho Favorite
app.get("/favorite", favoriteController.getFavorites);

// Router cho Mức độ trầm cảm
app.get("/levelDepressionById/:id", Level_DepressionController.getLevelDepressionById);
app.post("/levelDepression", Level_DepressionController.createLevelDepression);
app.post("/updateLevelDepression", Level_DepressionController.updateLevelDepression);

// Router cho Mission trong Ngày
app.post("/MissionDay", MissionDayController.createMissionDay);
app.get("/getMissionDayById/:id", MissionDayController.getMissionDayById);
app.put("/updateMissionDayById/:id", MissionDayController.updateMissionDayById);

// Router cho Test
app.post("/Test", testController.createTest);
app.get("/getTest", testController.getTests);

// Route cho Chatbot
app.post("/Chatbot", ChatbotController.Chatbot);

// Route cho Film
app.get("/Film", filmController.getFilm);

// Route cho Song
app.get("/Song", songController.getSong);

// Route cho Game
app.get("/Game", gameController.getGame);

// Route de Update Name
app.put('/user/update-name/:id', userController.updateName);

// Cập nhật trường phoneNumber của User
app.put('/user/update-phone/:id', userController.updatePhoneNo);

// Cập nhật trường DOB của User
app.put('/user/update-dob/:id', userController.updateDOB);

// Cập nhật trường address của User
app.put('/user/update-address/:id', userController.updateAddress);

app.put('/userdata/update-bio/:id', userController.updateBio);

app.put('/user/update-noti/:id', userController.updateNoti);

// Cập nhật trường socialConnections của UserData
app.put('/userdata/update-social/:id', userController.updateSocialConnection);

// Router cho Upload
app.post('/upload', uploadCloud.single('image'), imageController.Upload);

// Define your routes and use the controller functions as handlers
app.post('/user-date-activity', createUserDateActivity);
app.get('/user-date-activity/:userId', getUserDateActivitiesByUserId);
app.get('/user-date-activity/:id', getUserDateActivityById);
app.delete('/user-date-activity/:id', deleteUserDateActivityById);
app.put('/update-user-date-activity', updateUserDateActivity);
app.post('/get-or-create-user-date-activity', getUserDateActivity);

// Router cho message
app.post("/addmsg", addMessage);
app.post("/getmsg", getMessages);

// Router cho Mission Card
app.post("/regisCard", MissionCardController.createData);
app.put("/scanCard/:id", MissionCardController.scanCard);
app.put("/updateCard/:id", MissionCardController.updateCard);
app.get("/getUserCard/:id", MissionCardController.getUserCard);

module.exports = app;
