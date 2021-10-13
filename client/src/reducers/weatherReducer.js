import { WEATHER_SUCCESS, WEATHER_FAILURE } from "../actions/index";
import { weatherState } from "./initialState";

const weatherReducer = (state = weatherState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case WEATHER_SUCCESS:
      return { ...newState, weatherOk: action.payload };
      break;

    default:
      return state;
  }
};
export default weatherReducer;
