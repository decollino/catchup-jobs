import Axios from 'axios';
import {
  USER_REGISTERABOUTYOUPI_FAIL,
  USER_REGISTERABOUTYOUPI_REQUEST,
  USER_REGISTERABOUTYOUPI_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
} from '../constants/userConstants';

const base_backend_url = process.env.REACT_APP_BASE_BACKEND_URL;

export const registerAboutYouPi = (userPi) => async (dispatch) => {
  dispatch({
    type: USER_REGISTERABOUTYOUPI_REQUEST,
    payload: { userPi },
  });
  try {
    const { data } = await Axios.post(
      `${base_backend_url}/api/users/registerAboutYouPi`,
      {
        userPi,
      }
    );
    dispatch({ type: USER_REGISTERABOUTYOUPI_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTERABOUTYOUPI_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const register =
  (fullName, email, password, chkTpp) => async (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST, payload: { email, password } });
    try {
      const { data } = await Axios.post(
        `${base_backend_url}/api/users/register`,
        {
          fullName,
          email,
          password,
          chkTpp,
        }
      );
      console.log('userActions - register - data: ', data);
      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await Axios.post(`${base_backend_url}/api/users/signin`, {
      email,
      password,
    });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const signout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({ type: USER_SIGNOUT });
  document.location.href = '/signin';
};
