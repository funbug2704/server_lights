const express = require("express");
const app = express.Router();

app.use(require("./userRoutes"));
app.use(require("./diaryRoutes"));
app.use(require("./emotionRoutes"));
app.use(require("./favoriteUserRoutes"));
app.use(require("./favoriteRoutes"));
app.use(require("./levelDepressionRoutes"));
app.use(require("./missionDayRoutes"));
app.use(require("./testRoutes"));
app.use(require("./chatbotRoutes"));
app.use(require("./filmRoutes"));
app.use(require("./songRoutes"));
app.use(require("./gameRoutes"));
app.use(require("./uploadRoutes"));
app.use(require("./dateDataRoutes"));
app.use(require("./messageRoutes"));
app.use(require("./missionCardRoutes"));

module.exports = app;
