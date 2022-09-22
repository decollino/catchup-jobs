import React from 'react';

export default function RatingInput(props) {
  return (
    <div>
      <input
        type="text"
        id="text"
        placeholder="Write and Rate your language skill"
        value={props.value}
        onChange={''}
        required
      ></input>
      <div>
        <label />
        <button className="primary" type="submit">
          Send
        </button>
      </div>
    </div>
  );
}
