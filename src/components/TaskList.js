// src/components/TaskList.js
import React from 'react';
import './css/TaskList.css';

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </div>
          <div>
            <select 
              value={task.status} 
              onChange={(e) => updateTask(task.id, e.target.value)}
            >
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
