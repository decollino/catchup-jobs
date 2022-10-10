import {
  VACANCY_DETAILS_FAIL,
  VACANCY_DETAILS_REQUEST,
  VACANCY_DETAILS_SUCCESS,
  VACANCY_LIST_FAIL,
  VACANCY_LIST_REQUEST,
  VACANCY_LIST_SUCCESS,
  VACANCY_CREATE_REQUEST,
  VACANCY_CREATE_SUCCESS,
  VACANCY_CREATE_FAIL,
  VACANCY_EMPTY,
  USER_VACANCY_LIST_FAIL,
  USER_VACANCY_LIST_SUCCESS,
  USER_VACANCY_LIST_REQUEST,
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

export const userVacancyInfoReducer = (
  state = { userVacancyInfoItems: [] },
  action
) => {
  switch (action.type) {
    case VACANCY_CREATE_REQUEST:
      return { loading: true };
    case VACANCY_CREATE_SUCCESS:
      return { loading: false, success: true, userVacancyInfo: action.payload };
    case VACANCY_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case VACANCY_EMPTY:
      return { ...state, error: '', userVacancyInfo: {} };
    default:
      return state;
  }
};

export const userVacancyListReducer = (
  state = { loading: true, userVacancies: [] },
  action
) => {
  switch (action.type) {
    case USER_VACANCY_LIST_REQUEST:
      return { loading: true };
    case USER_VACANCY_LIST_SUCCESS:
      return { loading: false, userVacancies: action.payload };
    case USER_VACANCY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
