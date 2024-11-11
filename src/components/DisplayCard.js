// src/components/DisplayCard.js
import React from 'react';
import Dropdown from './Dropdown';
import './DisplayCard.css';

function DisplayCard({ grouping, setGrouping, ordering, setOrdering }) {
  return (
    <div className="display-card">
      <img src="/assets/Display.svg" alt="Display Icon" className="display-icon" />
      <div className="dropdowns">
        <Dropdown
          label="Grouping"
          options={[
            { value: 'status', label: 'Status' },
            { value: 'user', label: 'User' },
            { value: 'priority', label: 'Priority' },
          ]}
          selectedValue={grouping}
          onChange={setGrouping}
        />
        <Dropdown
          label="Ordering"
          options={[
            { value: 'priority', label: 'Priority' },
            { value: 'title', label: 'Title' },
          ]}
          selectedValue={ordering}
          onChange={setOrdering}
        />
      </div>
    </div>
  );
}

export default DisplayCard;
