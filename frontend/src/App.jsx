import React from 'react';
import TaskForm from './components/TaskForm.jsx';
import TaskList from './components/TaskList.jsx';
import TaskFilter from './components/TaskFilter.jsx';
import { useTheme } from './context/ThemeContext.jsx';
import './App.css';

const App = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
      <h1>Task Manager</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <TaskForm />
      <TaskFilter />
      <TaskList />
    </div>
  );
};

export default App;
