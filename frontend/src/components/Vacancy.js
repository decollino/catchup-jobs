import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function Vacancy(props) {
  const { vacancy } = props;
  return (
    <div key={vacancy.id} className="card">
      <Link to={`/vacancy/${vacancy.id}`}>
        <img
          className="medium"
          src={vacancy.companyImage}
          alt={vacancy.vacancyName}
        />
      </Link>
      <div className="card-body">
        <Link to={`/vacancy/${vacancy.id}`}>
          <h2>{vacancy.vacancyName}</h2>
        </Link>
        <h2>{vacancy.companyName}</h2>
        {/* <h2>{vacancy.vacancyDescription}</h2> */}
        {/* <Rating
          rating={vacancy.rating}
          numReviews={vacancy.numReviews}
        ></Rating> */}
        {/* <div className="price">{vacancy.companyName}</div>
        <div className="price">{vacancy.vacancyDescription}</div>
        <div className="price">${vacancy.price}</div> */}
      </div>
    </div>
  );
}
