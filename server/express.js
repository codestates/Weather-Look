require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const fs = require("fs");
const https = require("https");
const controllers = require("./controllers");
const bodyParser = require("body-parser");
const request = require("request");

app.use(express.static("public")); //정적페이지를 렌더링할때 루트디렉토리 역할을 한다
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.get("/", function (req, res) {
  res.render("index", { weather: null, error: null });
});
//기본 display 설정 그리고 path "/" 경로에 대한 get 요청을 실행할때 보게되는 page

const apiKey = `${process.env.WEATHER_API_KEY}`;

app.post("/weatherapi", function (req, res) {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  //post 요청에 전달된 도시와 .env 파일의 apikey를 사용해서 api에서 데이터를 가져오는거
  request(url, function (err, response, body) {
    if (err) {
      res.render("index", { weather: null, error: "Error, please try again" });
    } else {
      let weather = JSON.parse(body);
      console.log(weather);
      //오류가 발생하면 "Error, please try again" 에러 표시
      if (weather.main == undefined) {
        res.render("index", {
          weather: null,
          error: "Error, please try again",
        });
      } else {
        let place = `${weather.name}, ${weather.sys.country}`,
          weatherTimezone = `${new Date(
            weather.dt * 1000 - weather.timezone * 1000
          )}`;
        let weatherTemp = `${weather.main.temp}`,
          weatherPressure = `${weather.main.pressure}`,
          weatherIcon = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
          weatherDescription = `${weather.weather[0].description}`,
          humidity = `${weather.main.humidity}`,
          clouds = `${weather.clouds.all}`,
          visibility = `${weather.visibility}`,
          main = `${weather.weather[0].main}`,
          weatherFahrenheit;
        weatherFahrenheit = (weatherTemp * 9) / 5 + 32;

        function roundToTwo(num) {
          return +(Math.round(num + "e+2") + "e-2");
        }
        weatherFahrenheit = roundToTwo(weatherFahrenheit);
        //다음으로 반환된 날씨 데이터가 정의되지않았는지 확인 이것은 오류를 나타내고 그렇지 않은 경우 컨텐츠 저장 진행
        res.render("index", {
          weather: weather,
          place: place,
          temp: weatherTemp,
          pressure: weatherPressure,
          icon: weatherIcon,
          description: weatherDescription,
          timezone: weatherTimezone,
          humidity: humidity,
          fahrenheit: weatherFahrenheit,
          clouds: clouds,
          visibility: visibility,
          main: main,
          error: null,
          //저장된 값은 웹페이지에
        });
      }
    }
  });
});

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

const privateKey = fs.readFileSync("./key.pem", "utf8");
const certificate = fs.readFileSync("./cert.pem", "utf8");
const credentials = { key: privateKey, cert: certificate };

const HTTPS_PORT = process.env.HTTPS_PORT || 4000;
const httpsServer = https.createServer(credentials, app);
httpsServer.listen(HTTPS_PORT, () => console.log("server runnning"));

module.exports = httpsServer;
