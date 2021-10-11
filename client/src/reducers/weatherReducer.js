import { WEATHER_SUCCESS, WEATHER_FAILURE } from "../actions/index";
import { weatherState } from "./initialState";

const weatherReducer = (state = weatherState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case WEATHER_SUCCESS:
      return { ...newState, weatherData: action.payload, error: null };
      break;
    case WEATHER_FAILURE:
      return { ...newState, weatherData: null, error: action.payload };
      break;
    default:
      return state;
  }
};
export default weatherReducer;
