import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './Components/TaskForm.jsx';
import TaskList from './Components/TaskList.jsx';
import TaskFilter from './Components/TaskFilter.jsx';
import NavBar from './Components/Navbar.jsx';
import SignUp from './Components/SignUp.jsx';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/home.jsx'

import './index.css';

const App = () => {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/main" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
