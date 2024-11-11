// src/components/Dropdown.js
import React from 'react';
import './Dropdown.css';

function Dropdown({ label, options, selectedValue, onChange }) {
  return (
    <div className="dropdown">
      <label className="dropdown-label">{label}</label>
      <div className="dropdown-container">
        <select value={selectedValue} onChange={(e) => onChange(e.target.value)}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <img src="/assets/down.svg" alt="Dropdown Icon" className="dropdown-icon" />
      </div>
    </div>
  );
}

export default Dropdown;
