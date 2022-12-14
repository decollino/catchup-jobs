import Axios from 'axios';
import {
  LANGUAGE_LIST_FAIL,
  LANGUAGE_LIST_REQUEST,
  LANGUAGE_LIST_SUCCESS,
} from '../constants/languageConstants';

export const listLanguage = () => async (dispatch) => {
  dispatch({
    type: LANGUAGE_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get('/api/languages');
    // console.log('data: ', data);
    dispatch({ type: LANGUAGE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LANGUAGE_LIST_FAIL, payload: error.message });
  }
};
