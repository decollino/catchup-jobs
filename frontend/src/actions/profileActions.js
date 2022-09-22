import Axios from 'axios';
import {
  PROFILE_SAVE_ABOUTYOU_PI,
  PROFILE_SAVE_ABOUTYOU_CAREER,
  PROFILE_SAVE_ABOUTYOU_LANGUAGE,
  PROFILE_SAVE_JOBEXPERIENCE,
  PROFILE_SAVE_SKILL,
  PROFILE_CREATE_FAIL,
  PROFILE_CREATE_SUCCESS,
  PROFILE_CREATE_REQUEST,
  PROFILE_EMPTY,
  PROFILE_SAVE_EDUCATION,
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
  (language) => async (dispatch, getState) => {
    dispatch({
      type: PROFILE_SAVE_ABOUTYOU_LANGUAGE,
      payload: {
        language,
      },
    });
    localStorage.setItem(
      'aboutYouLanguage',
      JSON.stringify(getState().profile.aboutYouLanguage)
    );
  };

export const saveJobExperience =
  (profileUrl, professionalXp) => async (dispatch, getState) => {
    dispatch({
      type: PROFILE_SAVE_JOBEXPERIENCE,
      payload: {
        profileUrl,
        professionalXp,
      },
    });
    localStorage.setItem(
      'jobExperience',
      JSON.stringify(getState().profile.jobExperience)
    );
  };

export const saveEducation = (education) => async (dispatch, getState) => {
  dispatch({
    type: PROFILE_SAVE_EDUCATION,
    payload: { education },
  });
  localStorage.setItem(
    'education',
    JSON.stringify(getState().profile.education)
  );
};

export const saveSkill = (skill) => async (dispatch, getState) => {
  console.log('*** profileAction - saveSkill - skill ***: ', skill);
  dispatch({
    type: PROFILE_SAVE_SKILL,
    payload: {
      skill,
    },
  });
  localStorage.setItem('skill', JSON.stringify(getState().profile.skill));
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
