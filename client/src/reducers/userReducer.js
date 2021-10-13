import {
  IS_LOGIN,
  IS_LOGOUT,
  ADD_USER_INFO,
  LOGOUT_USERINFO,
  ADD_SIGNUP_INFO,
  IS_OPEN_MODAL,
  IS_CLOSE_MODAL,
  AUTH_SUCCESS,
  WEATHER_SUCCESS,
} from "../actions/index";
import { initialState } from "./initialState";

const userReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case IS_LOGIN:
      return { ...newState, login: true };
      break;
    case IS_LOGOUT:
      return { ...newState, login: false };
      break;
    case ADD_USER_INFO:
      return { ...newState, userInfo: action.payload };
      break;
    case LOGOUT_USERINFO:
      return { ...newState, login: false, userInfo: {} };
      break;
    case ADD_SIGNUP_INFO:
      return { ...newState, signupInfo: action.payload };
      break;
    case IS_OPEN_MODAL:
      return { ...newState, openModal: true };
      break;
    case IS_CLOSE_MODAL:
      return { ...newState, openModal: false };
      break;
    case AUTH_SUCCESS:
      return { ...newState, success: action.payload };
      break;
    case WEATHER_SUCCESS:
      return { ...newState, weatherOk: action.payload };
      break;

    default:
      return state;
  }
};
export default userReducer;
