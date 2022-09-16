import React from 'react';
import { useState, useContext, useEffect } from 'react';
// import FeedbackContext from '../context/FeedbackContext';

function RatingSelect(props) {
  // console.log('props: ', props);
  console.log('select: ', props.select);
  console.log('feedbackEdit: ', props.feedbackEdit);

  const [selected, setSelected] = useState(1);

  // const { feedbackEdit } = useContext(FeedbackContext);

  useEffect(() => {
    setSelected(props.feedbackEdit.item.rating);
  }, [props.feedbackEdit]);

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    props.select(+e.currentTarget.value);
  };

  console.log('RatingSelect');
  return (
    <ul className="rating">
      <li>
        <input
          type="radio"
          id="native"
          name="rating"
          value="1"
          onChange={handleChange}
          checked={selected === 1}
        />
        <label htmlFor="native">Native</label>
      </li>
      <li>
        <input
          type="radio"
          id="fluent"
          name="rating"
          value="2"
          onChange={handleChange}
          checked={selected === 2}
        />
        <label htmlFor="fluent">Fluent</label>
      </li>
      <li>
        <input
          type="radio"
          id="advanced"
          name="rating"
          value="3"
          onChange={handleChange}
          checked={selected === 3}
        />
        <label htmlFor="advanced">Advanced</label>
      </li>
      <li>
        <input
          type="radio"
          id="intermediate"
          name="rating"
          value="4"
          onChange={handleChange}
          checked={selected === 4}
        />
        <label htmlFor="intermediate">Intermediate</label>
      </li>
      <li>
        <input
          type="radio"
          id="basic"
          name="rating"
          value="5"
          onChange={handleChange}
          checked={selected === 5}
        />
        <label htmlFor="basic">Basic</label>
      </li>
    </ul>
  );
}

export default RatingSelect;
