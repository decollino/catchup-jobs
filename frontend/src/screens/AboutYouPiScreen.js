import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveAboutYouPi } from '../actions/profileActions';
import CheckoutSteps from '../components/CheckoutSteps';

export default function AboutYouPiScreen() {
  const navigate = useNavigate();
  // const [fullName, setFullName] = useState('');
  const [nickname, setNickname] = useState('');
  const [pronouns, setPronouns] = useState('');
  // const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [ddi, setDdi] = useState('');
  const [phone, setPhone] = useState('');

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userId = userInfo.id;
  // console.log('userInfo: ', userInfo);

  if (!userInfo) {
    navigate('/signin');
  }

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveAboutYouPi(
        userId,
        userInfo.fullName,
        nickname,
        pronouns,
        userInfo.email,
        city,
        ddi,
        phone
      )
    );
    navigate('/aboutyoucareer');
  };

  console.log('AboutYouPiScreen New');
  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>About You - Step 1 - Personal Information</h1>
        </div>
        <div>
          <label htmlFor="fullName">What is your full name?</label>
          <input
            type="text"
            id="fullName"
            placeholder=""
            value={userInfo.fullName}
            // onChange={(e) => setFullName(e.target.value)}
            required
            readOnly="readOnly"
          ></input>
        </div>
        <div>
          <label htmlFor="nickname">How would you like to be called?</label>
          <input
            type="text"
            id="nickname"
            placeholder=""
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="pronouns">Pronouns</label>
          <select
            id="pronouns"
            name="pronouns"
            onChange={(e) => setPronouns(e.target.value)}
            value={pronouns}
            required
          >
            <option value="he">He</option>
            <option value="she">She</option>
          </select>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder=""
            value={userInfo.email}
            // onChange={(e) => setEmail(e.target.value)}
            required
            readOnly="readOnly"
          ></input>
        </div>
        <div>
          <label htmlFor="city">Current City</label>
          <input
            type="text"
            id="city"
            placeholder="E.g. São Paulo/SP"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="phone">
            Tell me your number for us to be able to contact you
          </label>
          <div className="phone">
            <select
              id="ddi"
              name="ddi"
              onChange={(e) => setDdi(e.target.value)}
              value={ddi}
              required
            >
              <option value="brazil">+55</option>
              <option value="usa">+1</option>
              <option value="portugal">+351</option>
            </select>
            <input
              className="phone2"
              type="text"
              id="phone"
              placeholder=""
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            ></input>
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
