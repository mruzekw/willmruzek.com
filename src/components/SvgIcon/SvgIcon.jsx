import React from 'react';

const SvgIcon = props => (
  <svg
    className="icon"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
  >
    {props.children}
  </svg>
);

export default SvgIcon;
