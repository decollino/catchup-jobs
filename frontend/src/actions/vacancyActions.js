import Axios from 'axios';
import {
  VACANCY_LIST_FAIL,
  VACANCY_LIST_REQUEST,
  VACANCY_LIST_SUCCESS,
  VACANCY_DETAILS_FAIL,
  VACANCY_DETAILS_REQUEST,
  VACANCY_DETAILS_SUCCESS,
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
