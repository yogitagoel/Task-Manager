import React from 'react';
import TaskForm from './Components/TaskForm.jsx';
import TaskList from './Components/TaskList.jsx';
import TaskFilter from './Components/TaskFilter.jsx';
import NavBar from "./Components/Navbar.jsx";
import './index.css';

const App = () => {

  return (
    <div className="Home">
      <NavBar/>
      <TaskForm />
      <TaskFilter />
      <TaskList />
    </div>
  );
};

export default App;
