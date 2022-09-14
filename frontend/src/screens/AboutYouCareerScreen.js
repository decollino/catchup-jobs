import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveAboutYouCareer } from '../actions/profileActions';
import CheckoutSteps from '../components/CheckoutSteps';

export default function AboutYouCareerScreen() {
  const navigate = useNavigate();
  const [jobTitle, setJobTitle] = useState('');
  const [yearsOfExperience, setYearsOfExperience] = useState('');

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  if (!userInfo) {
    navigate('/signin');
  }

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveAboutYouCareer(jobTitle, yearsOfExperience));
    navigate('/aboutyoulanguage');
  };

  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>About You - Step 2 - Career</h1>
        </div>
        <div>
          <label htmlFor="jobTitle">What is your job title?</label>
          <input
            type="text"
            id="jobTitle"
            placeholder=""
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="yearsOfExperience">
            How many years of experience?
          </label>
          <div>
            <div>
              <input
                type="radio"
                id="1"
                value="1"
                name="yearsOfExperience"
                required
                checked
                onChange={(e) => setYearsOfExperience(e.target.value)}
              ></input>
              <label htmlFor="1">I've just started</label>
            </div>
          </div>
          <div>
            <div>
              <input
                type="radio"
                id="2"
                value="2"
                name="yearsOfExperience"
                required
                onChange={(e) => setYearsOfExperience(e.target.value)}
              ></input>
              <label htmlFor="2">1 to 2 years</label>
            </div>
          </div>
          <div>
            <div>
              <input
                type="radio"
                id="3"
                value="3"
                name="yearsOfExperience"
                required
                onChange={(e) => setYearsOfExperience(e.target.value)}
              ></input>
              <label htmlFor="3">3 to 5 years</label>
            </div>
          </div>
          <div>
            <div>
              <input
                type="radio"
                id="4"
                value="4"
                name="yearsOfExperience"
                required
                onChange={(e) => setYearsOfExperience(e.target.value)}
              ></input>
              <label htmlFor="4">6 to 9 years</label>
            </div>
          </div>
          <div>
            <div>
              <input
                type="radio"
                id="5"
                value="5"
                name="yearsOfExperience"
                required
                onChange={(e) => setYearsOfExperience(e.target.value)}
              ></input>
              <label htmlFor="5">More than 9 years</label>
            </div>
          </div>
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
