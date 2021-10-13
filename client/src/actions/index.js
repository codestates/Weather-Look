import axios from "axios";

export const IS_LOGIN = "IS_LOGIN";
export const IS_LOGOUT = "IS_LOGOUT";
export const ADD_USER_INFO = "ADD_USER_INFO";
export const LOGOUT_USERINFO = "LOGOUT_USERINFO";
export const ADD_SIGNUP_INFO = "ADD_SIGNUP_INFO";
export const IS_OPEN_MODAL = "IS_OPEN_MODAL";
export const IS_CLOSE_MODAL = "IS_CLOSE_MODAL";
export const WEATHER_SUCCESS = "WEATHER_SUCCESS";
export const WEATHER_FAILURE = "WEATHER_FAILURE";
export const AUTH_SUCCESS = " AUTH_SUCCESS";

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
export const logoutUserInfo = () => {
  return {
    type: LOGOUT_USERINFO,
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
export const authSuccess = () => async (dispatch) => {
  const userData = await axios
    .get("https://localhost:4000/user/auth", { withCredentials: true })
    .then((res) => res.data.data.userInfo);
  dispatch({ type: AUTH_SUCCESS, payload: userData });

  //console.log("auth", res.data.data.userInfo);
  //isAuthenticated(res.data.data.userInfo);
};

export const weatherSuccess = (city) => async (dispatch) => {
  const weatherData = await axios
    .post(
      "https://localhost:4000/weatherapi",
      { city },
      { withCredentials: true }
    )
    .then((res) => console.log("weather---res", res));
  dispatch({ type: WEATHER_SUCCESS, payload: weatherData });
};
export const weatherFailure = () => {
  return {
    type: WEATHER_FAILURE,
  };
};
