import Axios from 'axios';
import {
  VACANCY_LIST_FAIL,
  VACANCY_LIST_REQUEST,
  VACANCY_LIST_SUCCESS,
  VACANCY_DETAILS_FAIL,
  VACANCY_DETAILS_REQUEST,
  VACANCY_DETAILS_SUCCESS,
  VACANCY_CREATE_REQUEST,
  VACANCY_CREATE_SUCCESS,
  VACANCY_EMPTY,
  VACANCY_CREATE_FAIL,
  USER_VACANCY_LIST_REQUEST,
  USER_VACANCY_LIST_FAIL,
  USER_VACANCY_LIST_SUCCESS,
} from '../constants/vacancyConstants';

export const listVacancies = () => async (dispatch, getState) => {
  dispatch({
    type: VACANCY_LIST_REQUEST,
  });
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await Axios.get('http://localhost:5000/api/vacancy', {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: VACANCY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: VACANCY_LIST_FAIL, payload: error.message });
  }
};

export const detailsVacancies = (vacancyId) => async (dispatch, getState) => {
  dispatch({
    type: VACANCY_DETAILS_REQUEST,
    payload: vacancyId,
  });
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await Axios.get(
      `http://localhost:5000/api/vacancy/${vacancyId}`,
      {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
    dispatch({ type: VACANCY_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: VACANCY_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createUserVacancy =
  (userVacancyInfo) => async (dispatch, getState) => {
    dispatch({ type: VACANCY_CREATE_REQUEST, payload: userVacancyInfo });
    try {
      const {
        userSignin: { userInfo },
      } = getState();
      console.log('userInfo: ', userInfo);
      const { data } = await Axios.post(
        'http://localhost:5000/api/userVacancy',
        userVacancyInfo,
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      dispatch({ type: VACANCY_CREATE_SUCCESS, payload: data.userVacancyInfo });
      dispatch({ type: VACANCY_EMPTY });
      localStorage.removeItem('userVacancyInfo');
      // localStorage.setItem('vacancy', JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: VACANCY_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const listUserVacancies = (userId) => async (dispatch, getState) => {
  dispatch({
    type: USER_VACANCY_LIST_REQUEST,
    payload: userId,
  });
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await Axios.get(
      `http://localhost:5000/api/userVacancy?userId=${userId}`,
      {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
    console.log('data: ', data);
    dispatch({ type: USER_VACANCY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_VACANCY_LIST_FAIL, payload: error.message });
  }
};
