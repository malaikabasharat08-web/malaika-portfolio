import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Ya sahi relative path
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="app-layout">
        {/* Clean & Reusable Navbar Component */}
        <Navbar />

        {/* Main Pages Routing */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Malaika Basharat. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}