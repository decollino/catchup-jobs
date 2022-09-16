import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveAboutYouLanguage } from '../actions/profileActions';
import CheckoutSteps from '../components/CheckoutSteps';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import RatingSelect from '../components/RatingSelect';

export default function AboutYouLanguageScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [text, setText] = useState('');
  const [language, setLanguage] = useState([
    {
      text: 'Portuguese',
      rating: 'Native',
    },
  ]);
  // const [level, setLevel] = useState('');

  const [rating, setRating] = useState(1);
  // const [btnDisabled, setBtnDisabled] = useState(true);
  const [languageEdit, setLanguageEdit] = useState({
    item: {},
    edit: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  if (!userInfo) {
    navigate('/signin');
  }

  const languageList = useSelector((state) => state.languageList);
  const { loading, error, languages } = languageList;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveAboutYouLanguage(language));
    navigate('/jobexperience');
  };

  const submitHandler2 = (e) => {
    e.preventDefault();
    if (text.trim().length > 3) {
      const newLanguage = {
        text,
        rating,
      };

      if (newLanguage.rating === 1) {
        newLanguage.rating = 'Basic';
      }
      if (newLanguage.rating === 2) {
        newLanguage.rating = 'Intermediate';
      }
      if (newLanguage.rating === 3) {
        newLanguage.rating = 'Advanced';
      }
      if (newLanguage.rating === 4) {
        newLanguage.rating = 'Fluent';
      }
      if (newLanguage.rating === 5) {
        newLanguage.rating = 'Native';
      }

      if (languageEdit.edit === true) {
        updateLanguage(languageEdit.item.text, newLanguage);
      } else {
        addLanguage(newLanguage);
      }

      setText('');
      setLanguageEdit({
        item: {},
        edit: false,
      });
    }
  };

  const addLanguage = async (newLanguage) => {
    setLanguage([newLanguage, ...language]);
  };

  const updateLanguage = async (text, updItem) => {
    setLanguage(
      language.map((item) =>
        item.text === text ? { ...item, ...updItem } : item
      )
    );
  };

  const deleteLanguage = async (id) => {
    setLanguage(language.filter((item) => item.text !== id));
  };

  // set item to be updated
  const editLanguage = (item) => {
    setLanguageEdit({
      item,
      edit: true,
    });
  };

  useEffect(() => {
    if (languageEdit.edit === true) {
      // setBtnDisabled(false);
      setText(languageEdit.item.text);
      setRating(languageEdit.item.rating);
    }
  }, [languageEdit]);

  // console.log('AboutYouLanguageScreen New');
  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className="form" onSubmit={submitHandler2}>
        <div>
          <h1>About You - Step 3 - Language</h1>
        </div>
        <RatingSelect
          select={(rating) => setRating(rating)}
          languageEdit={languageEdit}
        />
        <div>
          <input
            type="text"
            id="text"
            placeholder="Write and Rate your language skill"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          ></input>
          <div>
            <label />
            <button className="primary" type="submit">
              Send
            </button>
          </div>
        </div>
      </form>
      {isLoading ? (
        <p>No Language Yet</p>
      ) : (
        <div className="card">
          {language.map((item, id) => (
            <div key={id}>
              {item.rating}
              {item.text}
              {/* {ratingLanguage(item)} */}
              <button
                className="close"
                onClick={() => deleteLanguage(item.text)}
              ></button>
              <button
                onClick={() => editLanguage(item)}
                className="edit"
              ></button>
            </div>
          ))}
        </div>
      )}{' '}
      <form className="form" onSubmit={submitHandler}>
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
