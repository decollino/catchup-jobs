import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { listLanguage } from '../actions/languageActions';
import { saveAboutYouLanguage } from '../actions/profileActions';
import CheckoutSteps from '../components/CheckoutSteps';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function AboutYouLanguageScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [language, setLanguage] = useState('');
  const [level, setLevel] = useState('');

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  if (!userInfo) {
    navigate('/signin');
  }

  const languageList = useSelector((state) => state.languageList);
  const { loading, error, languages } = languageList;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveAboutYouLanguage(language, level));
    navigate('/jobexperience');
  };

  // useEffect(() => {
  //   dispatch(listLanguage());
  // }, []);

  console.log('AboutYouLanguageScreen New');
  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>About You - Step 3 - Language</h1>
        </div>
        <div>
          <label htmlFor="language">Language</label>
          <div className="language">
            <input
              className="language2"
              type="text"
              id="language"
              placeholder=""
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              required
            ></input>
            <select
              id="level"
              name="level"
              onChange={(e) => setLevel(e.target.value)}
              value={level}
              required
            >
              <option value="native">Native</option>
              <option value="fluent">Fluent</option>
              <option value="advanced">Advanced</option>
              <option value="intermediate">Intermediate</option>
              <option value="basic">Basic</option>
            </select>
          </div>
        </div>
        {/* <div>
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <div className="row center">
              {languages.map((language) => (
                <div key={language.id} className="card">
                  <div className="card-body">
                    <h2>{language.language}</h2>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div> */}
        <div>
          <label />
          <button className="primary" type="submit">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
