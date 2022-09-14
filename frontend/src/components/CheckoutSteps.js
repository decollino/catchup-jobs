import React from 'react';

export default function CheckoutSteps(props) {
  return (
    <div className="row checkout-steps">
      <div className={props.step1 ? 'active' : ''}>Sign-In</div>
      <div className={props.step2 ? 'active' : ''}>About You</div>
      <div className={props.step3 ? 'active' : ''}>Job Experience</div>
      <div className={props.step4 ? 'active' : ''}>Skills</div>
    </div>
  );
}
