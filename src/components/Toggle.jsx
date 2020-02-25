/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';

const Toggle = ({ checked, onChange }) => (
  <span className="toggle-control">
    <input className="dmcheck" type="checkbox" checked={checked} onChange={onChange} id="dmcheck" />
    <label htmlFor="dmcheck" />
  </span>
);

export default Toggle;
