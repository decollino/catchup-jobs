import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { createUserVacancy, detailsVacancies } from '../actions/vacancyActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function VacancyDetailScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [btnDisabled, setBtnDisabled] = useState(false);

  const { id: vacancyId } = useParams();

  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/signin';

  const vacancyDetails = useSelector((state) => state.vacancyDetails);
  const { loading, error, vacancy } = vacancyDetails;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userVacancyList = useSelector((state) => state.userVacancyList);
  const { userVacancies } = userVacancyList;

  useEffect(() => {
    if (!userInfo) {
      navigate(redirect);
    }
    dispatch(detailsVacancies(vacancyId));
  }, [dispatch, navigate, redirect, userInfo, vacancyId]);

  useEffect(() => {
    if (userVacancies.length !== 0) {
      const testFind = userVacancies.find((v) => {
        return v.vacancyId === parseInt(vacancyId);
      });
      if (testFind) {
        setBtnDisabled(true);
      } else {
        setBtnDisabled(false);
      }
    }
  }, [userVacancies, vacancyId]);

  const submitHandler = (e) => {
    e.preventDefault();
    const userVacancyInfo = {
      userId: userInfo.id,
      vacancyId: vacancy.id,
    };

    dispatch(createUserVacancy(userVacancyInfo));
    navigate('/userVacancy');
  };

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <Link to="/">back to result</Link>
          <div className="row top">
            <div className="col-2">
              <img
                className="large"
                src={vacancy.companyImage}
                alt={vacancy.companyImage}
              ></img>
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1>{vacancy.vacancyName}</h1>
                </li>
                <li>
                  Description:
                  <p>{vacancy.vacancyDescription}</p>
                </li>
              </ul>
            </div>
            <div className="col-1">
              <div className="card card-body">
                <ul>
                  <li>
                    <button
                      onClick={submitHandler}
                      className="primary block"
                      disabled={btnDisabled}
                    >
                      APPLY NOW
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
