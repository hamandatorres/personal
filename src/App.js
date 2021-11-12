import React from 'react';
import './scss/main.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.js';
import Landing from './components/Home/Landing.js';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Landing />
    </Router>
  );
}

export default App;
