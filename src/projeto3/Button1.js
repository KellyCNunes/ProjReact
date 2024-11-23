// Button1.js
import React from 'react';
import './Button1.css';

function Button1({ onClick, label }) {
  return (
    <button className="button1" onClick={onClick}>
      {label}
    </button>
  );
}

export default Button1;
