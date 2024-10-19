import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import Accommodation from './pages/Accommodation.js';
import About from './pages/About.js';
import Error404 from './pages/Error404.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accommodation" element={<Accommodation />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;