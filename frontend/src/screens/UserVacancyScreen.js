import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import { listUserVacancies } from '../actions/vacancyActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function UserVacancyScreen() {
  const navigate = useNavigate();

  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/signin';

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();
  const userVacancyList = useSelector((state) => state.userVacancyList);
  const { loading, error, userVacancies } = userVacancyList;
  console.log('userVacancies: ', userVacancies);

  useEffect(() => {
    if (!userInfo) {
      navigate(redirect);
    }
    dispatch(listUserVacancies(userInfo.id));
  }, [dispatch, navigate, redirect, userInfo]);

  return (
    <div className="row top">
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row top">
          <div className="col-2">
            <h1>User Vacancy List</h1>
            {userVacancies.length === 0 ? (
              <MessageBox>
                Your job list is empty.
                <Link to="/"> Go to Jobs list</Link>
              </MessageBox>
            ) : (
              <ul>
                {userVacancies.map((item) => (
                  <li key={item.id}>
                    <div className="row">
                      <div>
                        <img
                          src={item.vacancy.companyImage}
                          alt={item.id}
                          className="small"
                        ></img>
                      </div>
                      <div className="min-20">
                        {item.vacancy.companyDescription}
                      </div>
                      <div className="min-20">
                        <Link to={`/vacancy/${item.vacancy.id}`}>
                          {item.vacancy.vacancyName}
                        </Link>
                      </div>
                      <div className="min-20">{item.vacancy.vacancyValue}</div>
                      <div className="min-20">{item.status}</div>
                      {/* <div>
                        <select
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                        >
                          {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                        </select>
                      </div> */}
                      {/* <div>${item.price}</div> */}
                      {/* <div>
                        <button
                          type="button"
                          // onClick={() => removeFromCartHandler(item.product)}
                        >
                          Delete
                        </button>
                      </div> */}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* <div className="col-1">
            <div className="card card-body">
              <ul>
                <li>
                  <h2>
                    Subtotal ({userVacancies.reduce((a, c) => a + c.qty, 0)} items)
                : ${userVacancies.reduce((a, c) => a + c.price * c.qty, 0)}
                  </h2>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={checkoutHandler}
                    className="primary block"
                    disabled={userVacancies.length === 0}
                  >
                    Proceed to Checkout
                  </button>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      )}
    </div>
  );
}
