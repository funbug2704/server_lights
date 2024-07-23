const express = require("express");
const router = express.Router();
const { createUserDateActivity, getUserDateActivitiesByUserId, getUserDateActivityById, deleteUserDateActivityById, updateUserDateActivity, getUserDateActivity } = require('../controller/dateDataController');

router.post('/user-date-activity', createUserDateActivity);
router.get('/user-date-activity/:userId', getUserDateActivitiesByUserId);
router.get('/user-date-activity/:id', getUserDateActivityById);
router.delete('/user-date-activity/:id', deleteUserDateActivityById);
router.put('/update-user-date-activity', updateUserDateActivity);
router.post('/get-or-create-user-date-activity', getUserDateActivity);

module.exports = router;
