import React from 'react';
import TaskForm from './Components/TaskForm.jsx';
import TaskList from './Components/TaskList.jsx';
import TaskFilter from './Components/TaskFilter.jsx';
import NavBar from "./Components/Navbar.jsx";
import SignUp from "./Components/login.jsx"
import './index.css';

const App = () => {

  return (
    <div className="Home">
      <SignUp/>
      <NavBar/>
      <TaskForm />
      <br/>
      <TaskFilter />
      <br/>
      <TaskList />
    </div>
  );
};

export default App;
