require("dotenv").config();
const { getWeatherApi } = require("../function/index");

//weather api를 받아 지역별, 온도별로 온도를 응답 + 아이콘 추가
//도시검색으로 온도가 나오고 그 온도에 맞게 옷을 추천한다.
//그 도시에 맞는 온도를 가져오고 그 온도에 맞는 옷을 추천을 하려면 도시 안에 온도 설정 온도 안에 옷을 넣어주는 작업

module.exports = async (req, res) => {
  const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
  const cityname = [];
  const api = await getWeatherApi(cityname, WEATHER_API_KEY);
};

//서울,인천,수원,부산,광주
