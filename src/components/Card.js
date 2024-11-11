// src/components/Card.js
import React, { useMemo } from 'react';
import './Card.css';

const priorityIcons = {
  4: '/assets/SVG - Urgent Priority colour.svg',
  3: '/assets/Img - High Priority.svg',
  2: '/assets/Img - Medium Priority.svg',
  1: '/assets/Img - Low Priority.svg',
  0: '/assets/No-priority.svg'
};

// Function to generate a random avatar URL
function getRandomAvatar(gender = "men") {
  const randomId = Math.floor(Math.random() * 99) + 1;
  return `https://randomuser.me/api/portraits/${gender}/${randomId}.jpg`;
}

function Card({ task, userMap }) {
  // Memoize avatar to avoid regenerating on each render
  const avatarUrl = useMemo(() => getRandomAvatar(), []);

  return (
    <div className="task-card">
      <div className="card-header">
        <h4>{task.id}</h4>
        <img src="/assets/3 dot menu.svg" alt="Menu" className="menu-icon" />
      </div>
      <p>{task.title}</p>
      <div className="task-details">
        <img
          src={priorityIcons[task.priority] || priorityIcons[0]}
          alt="Priority Icon"
          className="priority-icon"
        />
        <span className="task-tag">{task.tag.join(", ")}</span>
        <img
          src={avatarUrl}
          alt="User Avatar"
          className="avatar"
        />
      </div>
    </div>
  );
}

export default Card;
