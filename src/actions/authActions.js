import axios from "axios";
import { LOGIN_ENDPOINT } from "../helpers/endpoints";
import setAuthToken from "../helpers/setAuthToken";
import jwtDecode from "jwt-decode";
import { SET_CURRENT_USER } from "./types";

export const loginUser = (userData) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .post(LOGIN_ENDPOINT, userData)
      .then((response) => {
        console.log(response.data.token);
        const authorization = response.data.token;
        localStorage.setItem("jwtToken", authorization);
        setAuthToken(authorization);
        const decoded = jwtDecode(authorization);
        dispatch(setCurrentUser({ user: decoded, loggedIn: true }));
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const setCurrentUser = ({ user, loggedIn }) => {
  return {
    type: SET_CURRENT_USER,
    payload: { user, loggedIn },
  };
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("jwtToken");

  setAuthToken(false);

  dispatch(
    setCurrentUser({
      user: {},
      loggedIn: false,
    })
  );
};
