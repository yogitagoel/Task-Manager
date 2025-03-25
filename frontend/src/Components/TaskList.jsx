import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, deleteTask, updateTask } from '../features/tasks/tasksSlice';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const taskStatus = useSelector((state) => state.tasks.status);
  const [editingTask, setEditingTask] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editStatus, setEditStatus] = useState('Pending');
  const [editdueDate,setEditDueDate] = useState(Date.now());

  useEffect(() => {
    if (taskStatus === 'idle') {
      dispatch(fetchTasks());
    }
  }, [taskStatus, dispatch]);

  const handleEditClick = (task) => {
    setEditingTask(task._id);
    setEditTitle(task.title);
    setEditDescription(task.description);
    setEditStatus(task.status);
    setEditDueDate(task.dueDate);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTask({ id: editingTask, title: editTitle, description: editDescription, status: editStatus, dueDate: editdueDate}));
    setEditingTask(null);
  };

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id}>
          {editingTask === task._id ? (
            <form onSubmit={handleEditSubmit}>
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                required
              />
              <textarea
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
              ></textarea>
              <select value={editStatus} onChange={(e) => setEditStatus(e.target.value)}>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
              <input
                type="date"
                value={editdueDate}
                onChange={(e) => setEditDueDate(e.target.value)}
                required
              />
              <button type="submit">Save</button>
            </form>
          ) : (
            <>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>Status: {task.status}</p>
              <p>{task.dueDate}</p>
              <button onClick={() => handleEditClick(task)}>Edit</button>
              <button onClick={() => handleDelete(task._id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
