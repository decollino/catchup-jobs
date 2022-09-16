import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { listLanguage } from '../actions/languageActions';
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
      rating: 1,
    },
  ]);
  const [level, setLevel] = useState('');

  const [rating, setRating] = useState(1);
  // const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  // const [feedback, setFeedback] = useState([]);
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
    dispatch(saveAboutYouLanguage(language, level));
    navigate('/jobexperience');
  };

  const submitHandler2 = (e) => {
    console.log('*** submitHandler2 ***');
    e.preventDefault();
    console.log('*** text ***: ', text);
    console.log('*** text.trim().length ***: ', text.trim().length);
    if (text.trim().length > 3) {
      const newLanguage = {
        text,
        rating,
      };

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.text, newLanguage);
      } else {
        addLanguage(newLanguage);
      }

      setText('');
      setFeedbackEdit({
        item: {},
        edit: false,
      });
    }
  };

  const addLanguage = async (newLanguage) => {
    console.log('*** addLanguage ***');
    console.log('newLanguage: ', newLanguage);
    console.log('language before: ', language);
    setLanguage([newLanguage, ...language]);
    console.log('language after: ', language);
  };

  const updateFeedback = async (text, updItem) => {
    setLanguage(
      language.map((item) =>
        item.text === text ? { ...item, ...updItem } : item
      )
    );
  };

  const deleteFeedback = async (id) => {
    console.log('*** deleteFeedback ***  ');
    console.log('*** id *** : ', id);
    setLanguage(language.filter((item) => item.text !== id));
  };

  // set item to be updated
  const editLanguage = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  // useEffect(() => {
  //   dispatch(listLanguage());
  // }, []);
  useEffect(() => {
    if (feedbackEdit.edit === true) {
      // setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  console.log('feedbackEdit : ', feedbackEdit);
  console.log('AboutYouLanguageScreen New');
  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <div>
        <h1>About You - Step 3 - Language</h1>
      </div>
      <form className="form" onSubmit={submitHandler2}>
        <RatingSelect
          select={(rating) => setRating(rating)}
          feedbackEdit={feedbackEdit}
        />
        <div>
          <label htmlFor="language">Language</label>
          <input
            type="text"
            id="text"
            placeholder=""
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Add
          </button>
        </div>
      </form>
      {isLoading ? (
        <p>No Language Yet</p>
      ) : (
        <div className="feedback-list">
          {language.map((item, id) => (
            <div key={id}>
              {console.log('item: ', item)}
              <div>{item.rating}</div>
              <div>{item.text}</div>
              <button
                className="close"
                onClick={() => deleteFeedback(item.text)}
              ></button>
              <button
                onClick={() => editLanguage(item)}
                className="edit"
              ></button>
            </div>
          ))}
        </div>
      )}
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
