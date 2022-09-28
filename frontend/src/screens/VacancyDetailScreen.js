import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { detailsVacancies } from '../actions/vacancyActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating';

export default function VacancyDetailScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id: vacancyId } = useParams();

  const [qty, setQty] = useState(1);
  const vacancyDetails = useSelector((state) => state.vacancyDetails);
  const { loading, error, vacancy } = vacancyDetails;

  useEffect(() => {
    dispatch(detailsVacancies(vacancyId));
  }, [dispatch, vacancyId]);

  const addToCartHandler = () => {
    navigate(`/cart/${vacancyId}?qty=${qty}`);
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
                {/* <li>
                  <Rating
                    rating={vacancy.rating}
                    numReviews={vacancy.numReviews}
                  ></Rating>
                </li> */}
                {/* <li>Price: ${vacancy.price}</li> */}
                <li>
                  Description:
                  <p>{vacancy.vacancyDescription}</p>
                </li>
              </ul>
            </div>
            <div className="col-1">
              <div className="card card-body">
                <ul>
                  {/* <li>
                    <div className="row">
                      <div>Price</div>
                      <div className="price">${vacancy.price}</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Status</div>
                      <div>
                        {vacancy.countInStock > 0 ? (
                          <span className="success">In Stock</span>
                        ) : (
                          <span className="danger">Unavailable</span>
                        )}
                      </div>
                    </div>
                  </li> */}
                  {/* {vacancy.countInStock > 0 && (
                    <>
                      <li>
                        <div className="row">
                          <div>Qty</div>
                          <div>
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(vacancy.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      </li>
                      <li>
                        <button
                          onClick={addToCartHandler}
                          className="primary block"
                        >
                          Add to Cart
                        </button>
                      </li>
                    </>
                  )} */}
                  <li>
                    <button
                      onClick={addToCartHandler}
                      className="primary block"
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
