import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createProfile, saveSkills } from '../actions/profileActions';
import CheckoutSteps from '../components/CheckoutSteps';

export default function SkillsScreen() {
  const navigate = useNavigate();
  const [popularSkill, setPopularSkill] = useState('');
  const [popYearsOfXp, setPopYearsOfXp] = useState('');
  // const [othersSkill, setOthersSkill] = useState('');
  // const [othYearsOfXp, setOthYearsOfXp] = useState('');

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const profile = useSelector((state) => state.profile);
  console.log('profile: ', profile);

  if (!userInfo) {
    navigate('/signin');
  }

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveSkills(popularSkill, popYearsOfXp));
    // dispatch(saveSkills(popularSkill, othersSkill, popYearsOfXp, othYearsOfXp));
    dispatch(createProfile(profile));
    navigate('/');
  };

  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Skills </h1>
        </div>
        <div>
          <label htmlFor="popularSkill">Popular Skills</label>
          <input
            type="text"
            id="popularSkill"
            placeholder=""
            value={popularSkill}
            onChange={(e) => setPopularSkill(e.target.value)}
            required
          ></input>
          <select
            id="popYearsOfXp"
            name="popYearsOfXp"
            onChange={(e) => setPopYearsOfXp(e.target.value)}
            value={popYearsOfXp}
            required
          >
            <option value="Less than 1 year">Less than 1 year</option>
            <option value="1 to 2 years">1 to 2 years</option>
            <option value="3 to 5 years">3 to 5 years</option>
            <option value="6 to 9 years">6 to 9 years</option>
            <option value="More than 9 years">More than 9 years</option>
          </select>
        </div>
        {/* <div>
          <label htmlFor="othersSkill">Others Skills</label>
          <input
            type="text"
            id="othersSkill"
            placeholder=""
            value={othersSkill}
            onChange={(e) => setOthersSkill(e.target.value)}
            required
          ></input>
          <select
            id="othYearsOfXp"
            name="othYearsOfXp"
            onChange={(e) => setOthYearsOfXp(e.target.value)}
            value={othYearsOfXp}
            required
          >
            <option value="1">Less than 1 year</option>
            <option value="2">1 to 2 years</option>
            <option value="3">3 to 5 years</option>
            <option value="4">6 to 9 years</option>
            <option value="5">More than 9 years</option>
          </select>
        </div> */}
        <div>
          <label />
          <button className="primary" type="submit">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
