import React from 'react';
import './scss/main.scss';
import Navbar from './components/Navbar/Navbar.js';
import Landing from './components/Home/Landing.js';
const App = () => {
  return (
    <div>
      <Navbar />
      <Landing />
    </div>
  );
}

export default App;
