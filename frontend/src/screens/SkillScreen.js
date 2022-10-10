import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createProfile, saveSkill } from '../actions/profileActions';
import CheckoutSteps from '../components/CheckoutSteps';
import XpSelect from '../components/XpSelect';

export default function SkillScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [text, setText] = useState('');
  const [skill, setSkill] = useState([
    {
      text: '',
      yearsOfXp: '',
    },
  ]);

  const [yearsOfXp, setYearsOfXp] = useState(1);
  const [skillEdit, setSkillEdit] = useState({
    item: {},
    edit: false,
  });

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const profile = useSelector((state) => state.profile);

  if (!userInfo) {
    navigate('/signin');
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveSkill(skill));
    dispatch(createProfile(profile));
    navigate('/');
  };

  const submitHandler2 = (e) => {
    e.preventDefault();
    if (text.trim().length > 3) {
      const newSkill = {
        text,
        yearsOfXp,
      };

      if (newSkill.yearsOfXp === 1) {
        newSkill.yearsOfXp = 'Less than 1 year';
      }
      if (newSkill.yearsOfXp === 2) {
        newSkill.yearsOfXp = '1 to 2 years';
      }
      if (newSkill.yearsOfXp === 3) {
        newSkill.yearsOfXp = '3 to 5 years';
      }
      if (newSkill.yearsOfXp === 4) {
        newSkill.yearsOfXp = '6 to 9 years';
      }
      if (newSkill.yearsOfXp === 5) {
        newSkill.yearsOfXp = 'More than 9 years';
      }

      if (skillEdit.edit === true) {
        updateSkill(skillEdit.item.text, newSkill);
      } else {
        addSkill(newSkill);
      }

      setText('');
      setSkillEdit({
        item: {},
        edit: false,
      });
    }
  };

  const addSkill = async (newSkill) => {
    if (skill.length > 0) {
      if (skill[0].text === '' && skill[0].yearsOfXp === '') {
        skill.splice(0, 1);
      }
    }
    setSkill([newSkill, ...skill]);
  };

  const updateSkill = async (text, updItem) => {
    setSkill(
      skill.map((item) => (item.text === text ? { ...item, ...updItem } : item))
    );
  };

  const deleteSkill = async (text) => {
    setSkill(skill.filter((item) => item.text !== text));
  };

  // set item to be updated
  const editSkill = (item) => {
    setSkillEdit({
      item,
      edit: true,
    });
  };

  useEffect(() => {
    if (skillEdit.edit === true) {
      setText(skillEdit.item.text);
      setYearsOfXp(skillEdit.item.yearsOfXp);
    }
  }, [skillEdit]);

  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4 step5></CheckoutSteps>
      <form className="form" onSubmit={submitHandler2}>
        <div>
          <h1>Skill</h1>
        </div>
        <XpSelect
          select={(yearsOfXp) => setYearsOfXp(yearsOfXp)}
          skillEdit={skillEdit}
        />
        {/* <YearsOfXpInput value={text} /> */}
        <div>
          <input
            type="text"
            id="text"
            placeholder="Write and Rate your skill skill"
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
      {/* {console.log('skill map: ', skill)} */}
      {/* <form className="form"> */}
      {/* {isLoading ? ( */}
      {skill[0].text === '' ? (
        <div className="card">
          <p>No Skills to show!</p>
        </div>
      ) : (
        <div className="card">
          {skill.map((item, id) => (
            <div key={id}>
              <div className="row">
                <div className="min-20">{item.yearsOfXp}</div>
                <div className="min-20">{item.text}</div>
                <button
                  className="close"
                  onClick={() => deleteSkill(item.text)}
                ></button>
                <button
                  onClick={() => editSkill(item)}
                  className="edit"
                ></button>
              </div>
            </div>
          ))}
        </div>
      )}{' '}
      {/* </form> */}
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
