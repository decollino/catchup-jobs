import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { listUserVacancies, listVacancies } from '../actions/vacancyActions';
import Vacancy from '../components/Vacancy';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function VacancyScreen() {
  const navigate = useNavigate();

  const [text, setText] = useState('');

  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/signin';

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();
  const vacancyList = useSelector((state) => state.vacancyList);
  const { loading, error, vacancies } = vacancyList;

  const userVacancyList = useSelector((state) => state.userVacancyList);
  const { userVacancies } = userVacancyList;
  console.log('userVacancies 2: ', userVacancies);

  useEffect(() => {
    if (!userInfo) {
      navigate(redirect);
    }
    dispatch(listVacancies());
    dispatch(listUserVacancies(userInfo.id));
  }, [dispatch, navigate, redirect, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch(listVacancies());
  };

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          <form className="form" onSubmit={submitHandler}>
            <div>
              <input
                type="text"
                id="text"
                placeholder="Filter here your jobs"
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
              ></input>
              <label />
              <button className="primary" type="submit">
                Send
              </button>
            </div>
          </form>
          {vacancies.map((vacancy) => (
            <Vacancy key={vacancy.id} vacancy={vacancy}></Vacancy>
          ))}
        </div>
      )}
    </div>
  );
}
