import {
  VACANCY_DETAILS_FAIL,
  VACANCY_DETAILS_REQUEST,
  VACANCY_DETAILS_SUCCESS,
  VACANCY_LIST_FAIL,
  VACANCY_LIST_REQUEST,
  VACANCY_LIST_SUCCESS,
} from '../constants/vacancyConstants';

export const vacancyListReducer = (
  state = { loading: true, vacancies: [] },
  action
) => {
  switch (action.type) {
    case VACANCY_LIST_REQUEST:
      return { loading: true };
    case VACANCY_LIST_SUCCESS:
      return { loading: false, vacancies: action.payload };
    case VACANCY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const vacancyDetailsReducer = (
  state = { vacancy: {}, loading: true },
  action
) => {
  switch (action.type) {
    case VACANCY_DETAILS_REQUEST:
      return { loading: true };
    case VACANCY_DETAILS_SUCCESS:
      return { loading: false, vacancy: action.payload };
    case VACANCY_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
