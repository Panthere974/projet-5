import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import Navbar from './components/Navbar/Navbar.js';
import Home from './pages/Home.js';
import Accommodation from './pages/Accommodation.js';
import About from './pages/About.js';
import Error404 from './pages/Error404.js';

function App() {
  return (
    <Router>
      <Navbar/>
      <div className={styles.main}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/accommodation" element={<Accommodation/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;