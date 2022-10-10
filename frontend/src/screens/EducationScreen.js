import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveEducation } from '../actions/profileActions';
import CheckoutSteps from '../components/CheckoutSteps';

export default function EducationScreen() {
  const navigate = useNavigate();
  const [courseName, setCourseName] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [degreeName, setDegreeName] = useState('');
  const [endPeriod, setEndPeriod] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [education, setEducation] = useState([
    {
      courseName: '',
      schoolName: '',
      degreeName: '',
      endPeriod: '',
    },
  ]);
  const [educationEdit, setEducationEdit] = useState({
    item: {},
    edit: false,
  });

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  if (!userInfo) {
    navigate('/signin');
  }

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveEducation(education));
    navigate('/skills');
  };

  const submitHandler2 = (e) => {
    console.log('submitHandler2');
    e.preventDefault();
    if (courseName.trim().length > 1) {
      const newEducation = {
        courseName,
        schoolName,
        degreeName,
        endPeriod,
      };
      console.log('newEducation: ', newEducation);
      console.log('educationEdit: ', educationEdit);

      if (educationEdit.edit === true) {
        updateEducation(educationEdit.item, newEducation);
      } else {
        addEducation(newEducation);
      }

      setCourseName('');
      setSchoolName('');
      setDegreeName('');
      setEndPeriod('');
      setEducationEdit({
        item: {},
        edit: false,
      });
    }
  };

  const addEducation = async (newEducation) => {
    console.log('addEducation');
    console.log('education.length: ', education.length);
    if (education.length > 0) {
      if (
        education[0].courseName === '' &&
        education[0].schoolName === '' &&
        education[0].degreeName === '' &&
        education[0].endPeriod === ''
      ) {
        education.splice(0, 1);
      }
    }
    console.log('aqui!');
    setEducation([newEducation, ...education]);
  };

  const updateEducation = async (oldProfXpItem, newUpdItem) => {
    console.log('updateEducation');
    console.log('oldProfXpItem: ', oldProfXpItem);
    console.log('newUpdItem: ', newUpdItem);
    setEducation(
      education.map((item) => {
        if (
          item.courseName === oldProfXpItem.courseName &&
          item.schoolName === oldProfXpItem.schoolName &&
          item.degreeName === oldProfXpItem.degreeName &&
          item.endPeriod === oldProfXpItem.endPeriod
        ) {
          console.log('item: ', item);
          console.log('{...item, ...newUpdItem}: ', { ...item, ...newUpdItem });
          return { ...item, ...newUpdItem };
        } else {
          return item;
        }
      })
    );
    console.log('education: ', education);
  };

  const deleteEducation = async (profXpItem) => {
    console.log('deleteEducation');
    console.log('education: ', education);
    console.log('profXpItem: ', profXpItem);
    setEducation(
      education.filter(
        (item) =>
          item.courseName !== profXpItem.courseName ||
          item.schoolName !== profXpItem.schoolName ||
          item.degreeName !== profXpItem.degreeName ||
          item.endPeriod !== profXpItem.endPeriod
      )
    );
  };

  // set item to be updated
  const editEducation = (item) => {
    console.log('editEducation');
    setEducationEdit({
      item,
      edit: true,
    });
    console.log('editEducation sai');
  };

  useEffect(() => {
    if (educationEdit.edit === true) {
      // setBtnDisabled(false);
      setCourseName(educationEdit.item.courseName);
      setSchoolName(educationEdit.item.schoolName);
      setDegreeName(educationEdit.item.degreeName);
      setEndPeriod(educationEdit.item.endPeriod);
    }
  }, [educationEdit]);

  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <form className="form">
        <div>
          <h1>Education </h1>
        </div>
      </form>
      {/* <div>
          <label />
          <button className="primary" type="submit">
            Connect LinkedIn
          </button>
        </div> */}
      <form className="form" onSubmit={submitHandler2}>
        <div>
          {/* <label htmlFor="profileUrlProfessional">Professional</label> */}
          <div>
            <ul className="">
              <li>
                <input
                  type="text"
                  id="courseName"
                  placeholder="Write the name of your Course"
                  value={courseName}
                  onChange={(e) => setCourseName(e.target.value)}
                  required
                  className="jobXp"
                ></input>
              </li>
              <li>
                <input
                  type="text"
                  id="schoolName"
                  placeholder="School name"
                  value={schoolName}
                  onChange={(e) => setSchoolName(e.target.value)}
                  required
                  className="jobXp"
                ></input>
              </li>
              <li>
                <input
                  type="text"
                  id="degreeName"
                  placeholder="Degree Name"
                  value={degreeName}
                  onChange={(e) => setDegreeName(e.target.value)}
                  required
                  className="jobXp"
                ></input>
              </li>
              <li>
                <input
                  type="text"
                  id="endPeriod"
                  placeholder="YYYY/MM"
                  value={endPeriod}
                  onChange={(e) => setEndPeriod(e.target.value)}
                  required
                  className="jobXp"
                ></input>
              </li>
              <div>
                <label />
                <button className="primary" type="submit">
                  Send
                </button>
              </div>
            </ul>
          </div>
        </div>
      </form>
      {/* <form className="form"> */}
      {isLoading ? (
        <p>No Education Yet</p>
      ) : (
        <div className="card">
          {education.map((item, id) => (
            <div key={id}>
              <div className="row">
                <div className="min-20">{item.courseName}</div>
                <div className="min-20">{item.schoolName}</div>
                <div className="min-20">{item.degreeName}</div>
                <div className="min-20">{item.endPeriod}</div>{' '}
                {/* {console.log('item map: ', item)} */}
                <button
                  className="close"
                  onClick={() => deleteEducation(item)}
                ></button>
                <button
                  onClick={() => editEducation(item)}
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
