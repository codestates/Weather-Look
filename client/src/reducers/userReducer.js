import {
  IS_LOGIN,
  IS_LOGOUT,
  ADD_USER_INFO,
  LOGOUT_USERINFO,
  ADD_SIGNUP_INFO,
  IS_OPEN_MODAL,
  IS_CLOSE_MODAL,
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
      return { ...newState, userInfo: null };
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
    default:
      return state;
  }
};
export default userReducer;
