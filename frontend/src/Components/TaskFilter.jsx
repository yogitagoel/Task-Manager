import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const TaskFilter = () => {
  const [filter, setFilter] = useState('All');
  const tasks = useSelector((state) => state.tasks.tasks);

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'All') return true;
    return task.status === filter;
  });
  const style={
    display:"flex",
    justifyContent:"space-between",
    alignItes:"center",

  }
  return (
    <div style={style}>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      <ul>
        {filteredTasks.map((task) => (
          <li key={task._id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            <p>dueDate: {task.dueDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskFilter;
