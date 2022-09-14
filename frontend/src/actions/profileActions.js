import Axios from 'axios';
import {
  PROFILE_SAVE_ABOUTYOU_PI,
  PROFILE_SAVE_ABOUTYOU_CAREER,
  PROFILE_SAVE_ABOUTYOU_LANGUAGE,
  PROFILE_SAVE_JOBEXPERIENCE,
  PROFILE_SAVE_SKILLS,
  PROFILE_CREATE_FAIL,
  PROFILE_CREATE_SUCCESS,
  PROFILE_CREATE_REQUEST,
  PROFILE_EMPTY,
} from '../constants/profileConstants';

export const saveAboutYouPi =
  (id, fullName, nickname, pronouns, email, city, ddi, phone) =>
  async (dispatch, getState) => {
    dispatch({
      type: PROFILE_SAVE_ABOUTYOU_PI,
      payload: {
        id,
        fullName,
        nickname,
        pronouns,
        email,
        city,
        ddi,
        phone,
      },
    });
    localStorage.setItem(
      'aboutYouPi',
      JSON.stringify(getState().profile.aboutYouPi)
    );
  };

export const saveAboutYouCareer =
  (jobTitle, yearsOfExperience) => async (dispatch, getState) => {
    dispatch({
      type: PROFILE_SAVE_ABOUTYOU_CAREER,
      payload: {
        jobTitle,
        yearsOfExperience,
      },
    });
    localStorage.setItem(
      'aboutYouCareer',
      JSON.stringify(getState().profile.aboutYouCareer)
    );
  };

export const saveAboutYouLanguage =
  (language, level) => async (dispatch, getState) => {
    dispatch({
      type: PROFILE_SAVE_ABOUTYOU_LANGUAGE,
      payload: {
        language,
        level,
      },
    });
    localStorage.setItem(
      'aboutYouLanguage',
      JSON.stringify(getState().profile.aboutYouLanguage)
    );
  };

export const saveJobExperience = (profileUrl) => async (dispatch, getState) => {
  dispatch({
    type: PROFILE_SAVE_JOBEXPERIENCE,
    payload: {
      profileUrl,
    },
  });
  localStorage.setItem(
    'jobExperience',
    JSON.stringify(getState().profile.jobExperience)
  );
};

export const saveSkills =
  (popularSkill, popYearsOfXp) => async (dispatch, getState) => {
    dispatch({
      type: PROFILE_SAVE_SKILLS,
      payload: {
        popularSkill,
        popYearsOfXp,
      },
    });
    localStorage.setItem('skills', JSON.stringify(getState().profile.skills));
  };

export const createProfile = (profile) => async (dispatch, getState) => {
  dispatch({ type: PROFILE_CREATE_REQUEST, payload: profile });
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await Axios.post('/api/profiles', profile, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: PROFILE_CREATE_SUCCESS, payload: data.profile });
    dispatch({ type: PROFILE_EMPTY });
    localStorage.removeItem('profile');
  } catch (error) {
    dispatch({
      type: PROFILE_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
