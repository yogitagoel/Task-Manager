import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import { useTheme } from './context/ThemeContext';
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
