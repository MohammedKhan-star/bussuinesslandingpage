import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<div>Services Page</div>} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<div>About Page</div>} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;