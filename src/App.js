import React from 'react';
import './scss/main.scss';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Home/Landing.js';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
    </div>
  );
}

export default App;
