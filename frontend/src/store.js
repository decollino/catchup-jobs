import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { profileReducer } from './reducers/profieReducer';
import {
  userRegisterAboutYouPiReducer,
  userRegisterReducer,
  userSigninReducer,
} from './reducers/userReducer';
import { languageListReducer } from './reducers/languageReducer';
import {
  vacancyDetailsReducer,
  vacancyListReducer,
} from './reducers/vacancyReducers';

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null,
  },
  profile: {
    aboutYouPi: localStorage.getItem('aboutYouPi')
      ? JSON.parse(localStorage.getItem('aboutYouPi'))
      : {},
    aboutYouCareer: localStorage.getItem('aboutYouCareer')
      ? JSON.parse(localStorage.getItem('aboutYouCareer'))
      : {},
    aboutYouLanguage: localStorage.getItem('aboutYouLanguage')
      ? JSON.parse(localStorage.getItem('aboutYouLanguage'))
      : {},
    jobExperience: localStorage.getItem('jobExperience')
      ? JSON.parse(localStorage.getItem('jobExperience'))
      : {},
    education: localStorage.getItem('education')
      ? JSON.parse(localStorage.getItem('education'))
      : {},
    skills: localStorage.getItem('skill')
      ? JSON.parse(localStorage.getItem('skill'))
      : {},
  },
};
const reducer = combineReducers({
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  userRegisterAboutYouPi: userRegisterAboutYouPiReducer,
  profile: profileReducer,
  languageList: languageListReducer,
  vacancyList: vacancyListReducer,
  vacancyDetails: vacancyDetailsReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
