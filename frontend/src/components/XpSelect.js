import React from 'react';
import { useState, useEffect } from 'react';

function XpSelect(props) {
  const [selected, setSelected] = useState(1);

  useEffect(() => {
    setSelected(props.skillEdit.item.rating);
  }, [props.skillEdit]);

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    props.select(+e.currentTarget.value);
  };

  // console.log('RatingSelect');
  return (
    <ul className="rating">
      <li>
        <input
          type="radio"
          id="More than 9 years"
          name="rating"
          value="5"
          onChange={handleChange}
          checked={selected === 5}
        />
        <label htmlFor="More than 9 years">More than 9 years</label>
      </li>
      <li>
        <input
          type="radio"
          id="6 to 9 years"
          name="rating"
          value="4"
          onChange={handleChange}
          checked={selected === 4}
        />
        <label htmlFor="6 to 9 years">6 to 9 years</label>
      </li>
      <li>
        <input
          type="radio"
          id="3 to 5 years"
          name="rating"
          value="3"
          onChange={handleChange}
          checked={selected === 3}
        />
        <label htmlFor="3 to 5 years">3 to 5 years</label>
      </li>
      <li>
        <input
          type="radio"
          id="1 to 2 years"
          name="rating"
          value="2"
          onChange={handleChange}
          checked={selected === 2}
        />
        <label htmlFor="1 to 2 years">1 to 2 years</label>
      </li>
      <li>
        <input
          type="radio"
          id="Less than 1 year"
          name="rating"
          value="1"
          onChange={handleChange}
          checked={selected === 1}
        />
        <label htmlFor="Less than 1 year">Less than 1 year</label>
      </li>
    </ul>
  );
}

export default XpSelect;
