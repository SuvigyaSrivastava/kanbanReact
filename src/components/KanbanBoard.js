// src/components/KanbanBoard.js
import React, { useEffect, useState } from 'react';
import { fetchKanbanData } from '../api/kanbanApi';
import Card from './Card';
import DisplayCard from './DisplayCard';
import './KanbanBoard.css';
import { PRIORITY_LEVELS } from '../utils/constants';

const statusIcons = {
  "To Do": '/assets/To-do.svg',
  "In Progress": '/assets/in-progress.svg',
  "Done": '/assets/Done.svg',
  "Cancelled": '/assets/Cancelled.svg',
  "Backlog": '/assets/Backlog.svg'
};

function KanbanBoard() {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState('status');
  const [ordering, setOrdering] = useState('priority');

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchKanbanData();
      const { tickets = [], users = [] } = data || {};
      setTasks(tickets);
      setUsers(users);
    };
    loadData();
  }, []);

  const userMap = users.reduce((acc, user) => {
    acc[user.id] = user.name;
    return acc;
  }, {});

  const groupedTasks = tasks.reduce((acc, task) => {
    let groupKey;
    if (grouping === 'user') {
      groupKey = userMap[task.userId] || 'Unassigned';
    } else if (grouping === 'priority') {
      groupKey = PRIORITY_LEVELS[task.priority] || 'No priority';
    } else {
      groupKey = task.status || 'No Status';
    }
    if (!acc[groupKey]) acc[groupKey] = [];
    acc[groupKey].push(task);
    return acc;
  }, {});

  const sortedGroups = Object.keys(groupedTasks).sort((a, b) => {
    if (ordering === 'priority') {
      return PRIORITY_LEVELS[b] - PRIORITY_LEVELS[a];
    }
    return a.localeCompare(b);
  });

  return (
    <div className="kanban-board">
      <div className="controls">
        <DisplayCard
          grouping={grouping}
          setGrouping={setGrouping}
          ordering={ordering}
          setOrdering={setOrdering}
        />
      </div>
      <div className="kanban-columns">
        {sortedGroups.map((group) => (
          <div key={group} className="kanban-column">
            <h3>
              {statusIcons[group] && (
                <img src={statusIcons[group]} alt={`${group} icon`} className="status-icon" />
              )}
              {group}
              <button className="add-task-button">
                <img src="/assets/add.svg" alt="Add Task" />
              </button>
            </h3>
            {groupedTasks[group].map((task) => (
              <Card key={task.id} task={task} userMap={userMap} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default KanbanBoard;
