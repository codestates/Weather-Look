require("dotenv").config();
const { sign, verify } = require("jsonwebtoken");
const fetch = require("node-fetch");

module.exports = {
  signAccessToken: (data) => {
    delete data.password;
    const accessToken = sign(data, process.env.ACCESS_SECRET);
    return accessToken;
  },
  sendAccessToken: (res, accessToken) => {
    res.set(
      "SET-cookie",
      `jwt = ${accessToken}; Domain = "https://localhost:4000"; Path = /user/login; SameSite = Lax; Secure = true; HttpOnly = true;`
    );
    //Lax: get method에 대해서만 쿠키를 전송
    res.json({ message: "ok" });
  },
  getWeatherApi: (city, key) => {
    try {
      return fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric`
      );
    } catch {
      return null;
    }
  },
};
