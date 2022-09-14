import {
  PROFILE_CREATE_FAIL,
  PROFILE_CREATE_REQUEST,
  PROFILE_CREATE_SUCCESS,
  PROFILE_EMPTY,
  PROFILE_SAVE_ABOUTYOU_CAREER,
  PROFILE_SAVE_ABOUTYOU_LANGUAGE,
  PROFILE_SAVE_ABOUTYOU_PI,
  PROFILE_SAVE_JOBEXPERIENCE,
  PROFILE_SAVE_SKILLS,
} from '../constants/profileConstants';

export const profileReducer = (state = {}, action) => {
  switch (action.type) {
    case PROFILE_SAVE_ABOUTYOU_PI:
      return { ...state, aboutYouPi: action.payload };
    case PROFILE_SAVE_ABOUTYOU_CAREER:
      return { ...state, aboutYouCareer: action.payload };
    case PROFILE_SAVE_ABOUTYOU_LANGUAGE:
      return { ...state, aboutYouLanguage: action.payload };
    case PROFILE_SAVE_JOBEXPERIENCE:
      return { ...state, jobExperience: action.payload };
    case PROFILE_SAVE_SKILLS:
      return { ...state, skills: action.payload };
    case PROFILE_CREATE_REQUEST:
      return { loading: true };
    case PROFILE_CREATE_SUCCESS:
      return { loading: false, success: true, profile: action.payload };
    case PROFILE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case PROFILE_EMPTY:
      return { ...state, error: '', profile: {} };
    default:
      return state;
  }
};
