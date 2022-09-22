import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveJobExperience } from '../actions/profileActions';
import CheckoutSteps from '../components/CheckoutSteps';

export default function JobExperienceScreen() {
  const navigate = useNavigate();
  const [profileUrl, setProfileUrl] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [startPeriod, setStartPeriod] = useState('');
  const [endPeriod, setEndPeriod] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [professionalXp, setProfessionalXp] = useState([
    {
      jobTitle: '',
      companyName: '',
      startPeriod: '',
      endPeriod: '',
      description: '',
    },
  ]);
  const [professionalXpEdit, setProfessionalXpEdit] = useState({
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
    dispatch(saveJobExperience(profileUrl, professionalXp));
    navigate('/education');
  };

  const submitHandler2 = (e) => {
    console.log('submitHandler2');
    e.preventDefault();
    if (jobTitle.trim().length > 1) {
      const newProfessionalXp = {
        jobTitle,
        companyName,
        startPeriod,
        endPeriod,
        description,
      };
      console.log('newProfessionalXp: ', newProfessionalXp);
      console.log('professionalXpEdit: ', professionalXpEdit);

      if (professionalXpEdit.edit === true) {
        updateProfessionalXp(professionalXpEdit.item, newProfessionalXp);
      } else {
        addProfessionalXp(newProfessionalXp);
      }

      setJobTitle('');
      setCompanyName('');
      setStartPeriod('');
      setEndPeriod('');
      setDescription('');
      setProfessionalXpEdit({
        item: {},
        edit: false,
      });
    }
  };

  const addProfessionalXp = async (newProfessionalXp) => {
    if (professionalXp.length > 0) {
      if (
        professionalXp[0].jobTitle === '' &&
        professionalXp[0].companyName === '' &&
        professionalXp[0].startPeriod === '' &&
        professionalXp[0].endPeriod === '' &&
        professionalXp[0].description === ''
      ) {
        professionalXp.splice(0, 1);
      }
    }
    setProfessionalXp([newProfessionalXp, ...professionalXp]);
  };

  const updateProfessionalXp = async (oldProfXpItem, newUpdItem) => {
    console.log('updateProfessionalXp');
    console.log('oldProfXpItem: ', oldProfXpItem);
    console.log('newUpdItem: ', newUpdItem);
    setProfessionalXp(
      professionalXp.map((item) => {
        if (
          item.jobTitle === oldProfXpItem.jobTitle &&
          item.companyName === oldProfXpItem.companyName &&
          item.startPeriod === oldProfXpItem.startPeriod &&
          item.endPeriod === oldProfXpItem.endPeriod &&
          item.description === oldProfXpItem.description
        ) {
          console.log('item: ', item);
          console.log('{...item, ...newUpdItem}: ', { ...item, ...newUpdItem });
          return { ...item, ...newUpdItem };
        } else {
          return item;
        }
      })
    );
    console.log('professionalXp: ', professionalXp);
  };

  const deleteProfessionalXp = async (profXpItem) => {
    console.log('deleteProfessionalXp');
    console.log('professionalXp: ', professionalXp);
    console.log('profXpItem: ', profXpItem);
    setProfessionalXp(
      professionalXp.filter(
        (item) =>
          item.jobTitle !== profXpItem.jobTitle ||
          item.companyName !== profXpItem.companyName ||
          item.startPeriod !== profXpItem.startPeriod ||
          item.endPeriod !== profXpItem.endPeriod
      )
    );
  };

  // set item to be updated
  const editProfessionalXp = (item) => {
    console.log('editProfessionalXp');
    setProfessionalXpEdit({
      item,
      edit: true,
    });
    console.log('editProfessionalXp sai');
  };

  useEffect(() => {
    if (professionalXpEdit.edit === true) {
      // setBtnDisabled(false);
      setJobTitle(professionalXpEdit.item.jobTitle);
      setCompanyName(professionalXpEdit.item.companyName);
      setStartPeriod(professionalXpEdit.item.startPeriod);
      setEndPeriod(professionalXpEdit.item.endPeriod);
      setDescription(professionalXpEdit.item.description);
    }
  }, [professionalXpEdit]);

  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <form className="form">
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
      </form>
      {/* <div>
          <label />
          <button className="primary" type="submit">
            Connect LinkedIn
          </button>
        </div> */}
      <form className="form" onSubmit={submitHandler2}>
        <div>
          <label htmlFor="profileUrlProfessional">Professional</label>
          <div>
            <ul className="">
              <li>
                <input
                  type="text"
                  id="jobTitle"
                  placeholder="Write your job title"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  required
                  className="jobXp"
                ></input>
              </li>
              <li>
                <input
                  type="text"
                  id="companyName"
                  placeholder="Company name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                  className="jobXp"
                ></input>
              </li>
              <li>
                <input
                  type="text"
                  id="startPeriod"
                  placeholder="YYYY/MM"
                  value={startPeriod}
                  onChange={(e) => setStartPeriod(e.target.value)}
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
              <li>
                <input
                  type="text"
                  id="description"
                  placeholder="Describe your daily work!"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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
        <p>No Professional XP Yet</p>
      ) : (
        <div className="card">
          {professionalXp.map((item, id) => (
            <div key={id}>
              {item.jobTitle}
              {item.companyName}
              {item.startPeriod}
              {item.endPeriod}
              {item.description}
              {/* {console.log('item map: ', item)} */}
              <button
                className="close"
                onClick={() => deleteProfessionalXp(item)}
              ></button>
              <button
                onClick={() => editProfessionalXp(item)}
                className="edit"
              ></button>
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
