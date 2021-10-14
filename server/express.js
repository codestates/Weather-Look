require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const fs = require("fs");
const https = require("https");
const controllers = require("./controllers");

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "OPTIONS", "PATCH", "DELETE"],
  })
);

app.post("/weatherapi", controllers.weatherapi);
app.post("/user/login", controllers.login);
app.post("/user/logout", controllers.logout);
app.post("/user/signup", controllers.signup);
app.post("/user/mypage/checkPassword", controllers.checkPassword);
app.post("/user/signup/validEmail", controllers.validEmail);
app.post("/user/signup/checkNickname", controllers.checkNickname);
app.get("/user/auth", controllers.auth);

app.delete("/user/signout", controllers.signout);
app.patch("/user/inform", controllers.inform);
app.get("/user/mypage", controllers.mypage);

app.get("/", (req, res) => {
  res.send("Hello World");
});

const HTTPS_PORT = process.env.HTTPS_PORT || 4000;
app.listen(HTTPS_PORT, () => console.log("server runnning"));
