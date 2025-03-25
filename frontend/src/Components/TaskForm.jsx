import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from '../features/tasks/tasksSlice.js';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Pending');
  const [dueDate, setdueDate] = useState(Date.now);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTask({ title, description, status, dueDate }));
    setTitle('');
    setDescription('');
    setStatus('Pending');
    setdueDate(Date.now());
  };

  const divStyle={
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",

  }

  return (
    <form onSubmit={handleSubmit} style={divStyle}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task description"
      ></textarea>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <input
      type="date"
      value={dueDate}
      onChange={(e) => setdueDate(e.target.value)}
      placeholder="Task due Date"
      required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
