// require("dotenv").config();
// const { getWeatherApi } = require("../function/index");

//weather api를 받아 지역별, 온도별로 온도를 응답 + 아이콘 추가
//도시검색으로 온도가 나오고 그 온도에 맞게 옷을 추천한다.
//그 도시에 맞는 온도를 가져오고 그 온도에 맞는 옷을 추천을 하려면 도시 안에 온도 설정 온도 안에 옷을 넣어주는 작업

// module.exports = async (req, res) => {
//   const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
//   const cityname = [];
//   const api = await getWeatherApi(cityname, WEATHER_API_KEY);
// };

//서울,인천,수원,부산,광주
//const express = require("express");
const request = require("request");

module.exports = async (req, res, next) => {
  if (!req) {
    return res.status(400).send({ message: "req err" });
  }
  console.log("city--", req.body.city);
  const city = req.body.city;
  const apiKey = process.env.WEATHER_API_KEY;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const OPTIONS = {
    uri: url,
    method: "GET",
    body: {
      key: "value",
    },
    json: true,
  };
  request(OPTIONS, (err, response, body) => {
    if (!err & (response.statusCode === 200)) {
      return res.status(200).send(body);
    }
  });
};
/*
app.post("/weatherapi", function (req, res) {
  console.log("w--------", req);
  let city = req.body.city;

  //post 요청에 전달된 도시와 .env 파일의 apikey를 사용해서 api에서 데이터를 가져오는거
  //옵션 설정이 없네요..
  
  request(OPTIONS, function (err, response, body) {
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
});*/
