require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const fs = require("fs");
const https = require("https");
const controllers = require("./controllers");

app.use(
  cors({
    origin: ["https://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "OPTIONS", "PATCH", "DELETE"],
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.post("/user/login", controllers.login);
app.post("/user/logout", controllers.logout);
app.post("/user/signup", controllers.signup);
app.post("/user/signup/validEmail", controllers.validEmail);
app.post("/user/signup/checkNickname", controllers.checkNickname);
app.get("/user/auth", controllers.auth);
app.delete("user/signout", controllers.signout);
app.patch("/user/inform", controllers.inform);
app.get("/user/mypage", controllers.mypage);

app.get("/", (req, res) => {
  res.send("Hello World");
});

const privateKey = fs.readFileSync("./key.pem", "utf8");
const certificate = fs.readFileSync("./cert.pem", "utf8");
const credentials = { key: privateKey, cert: certificate };

const HTTPS_PORT = process.env.HTTPS_PORT || 4000;
const httpsServer = https.createServer(credentials, app);
httpsServer.listen(HTTPS_PORT, () => console.log("server runnning"));

module.exports = httpsServer;
