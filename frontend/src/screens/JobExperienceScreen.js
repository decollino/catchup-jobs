import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveJobExperience } from '../actions/profileActions';
import CheckoutSteps from '../components/CheckoutSteps';

export default function JobExperienceScreen() {
  const navigate = useNavigate();
  const [profileUrl, setProfileUrl] = useState('');

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  if (!userInfo) {
    navigate('/signin');
  }

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveJobExperience(profileUrl));
    navigate('/skills');
  };

  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Job Experience </h1>
        </div>
        <div>
          <label htmlFor="profileUrl">My profile URL</label>
          <input
            type="text"
            id="profileUrl"
            placeholder=""
            value={profileUrl}
            onChange={(e) => setProfileUrl(e.target.value)}
            required
          ></input>
        </div>
        {/* <div>
          <label />
          <button className="primary" type="submit">
            Connect LinkedIn
          </button>
        </div> */}
        <div>
          <label htmlFor="profileUrlProfessional">Professional</label>
        </div>
        <div>
          <label htmlFor="profileUrlEducation">Education</label>
        </div>
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
