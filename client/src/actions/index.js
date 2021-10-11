import axios from "axios";

export const IS_LOGIN = "IS_LOGIN";
export const IS_LOGOUT = "IS_LOGOUT";
export const ADD_USER_INFO = "ADD_USER_INFO";
export const ADD_SIGNUP_INFO = "ADD_SIGNUP_INFO";
export const IS_OPEN_MODAL = "IS_OPEN_MODAL";
export const IS_CLOSE_MODAL = "IS_CLOSE_MODAL";
export const WEATHER_SUCCESS = "WEATHER_SUCCESS";
export const WEATHER_FAILURE = "WEATHER_FAILURE";

// actions creator functions
export const isLogin = (email, password) => {
  return {
    type: IS_LOGIN,
  };
};
export const isLogout = () => {
  return {
    type: IS_LOGOUT,
  };
};
export const addUserInfo = (userInfo) => {
  return {
    type: ADD_USER_INFO,
    payload: userInfo,
  };
};
export const addSignupInfo = (signupInfo) => {
  return {
    type: ADD_SIGNUP_INFO,
    payload: signupInfo,
  };
};
export const isOpenModal = () => {
  return {
    type: IS_OPEN_MODAL,
  };
};
export const isCloseModal = () => {
  return {
    type: IS_CLOSE_MODAL,
  };
};
{
  /**서버로 post 요청 보내기 */
}
export const weatherSuccess = async (city) => {
  const weatherData = await axios.post("https://localhost:4000/weatherAPI", {
    city,
  });
  return {
    type: WEATHER_SUCCESS,
    payload: weatherData.data,
  };
};
export const weatherFailure = () => {
  return {
    type: WEATHER_FAILURE,
  };
};
