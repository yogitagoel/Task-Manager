import React from 'react';
import TaskForm from './Components/TaskForm.jsx';
import TaskList from './Components/TaskList.jsx';
import TaskFilter from './Components/TaskFilter.jsx';
import NavBar from "./Components/Navbar.jsx";
import './App.css';

const App = () => {

  return (
    <div className="Home">
      <NavBar/>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <TaskForm />
      <TaskFilter />
      <TaskList />
    </div>
  );
};

export default App;
