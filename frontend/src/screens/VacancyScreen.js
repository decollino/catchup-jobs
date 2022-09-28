import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { listVacancies } from '../actions/vacancyActions';
import Vacancy from '../components/Vacancy';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function VacancyScreen() {
  const navigate = useNavigate();

  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/signin';

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();
  const vacancyList = useSelector((state) => state.vacancyList);
  const { loading, error, vacancies } = vacancyList;

  useEffect(() => {
    if (!userInfo) {
      navigate(redirect);
    }
    dispatch(listVacancies());
  }, [dispatch, navigate, redirect, userInfo]);

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {vacancies.map((vacancy) => (
            <Vacancy key={vacancy.id} vacancy={vacancy}></Vacancy>
          ))}
        </div>
      )}
    </div>
  );
}
