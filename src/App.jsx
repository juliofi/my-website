import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Home from './pages/home'; 
import Portifolio from './pages/portifolio'; 
import Conhecimentos from './pages/conhecimentos'; 
import SobreMim from './pages/sobremim'; 
import { MdLightMode, MdDarkMode } from 'react-icons/md';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // 1. Carrega preferência do localStorage ao montar
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setDarkMode(true);
    }
  }, []);

  // 2. Atualiza classe no <body> e salva preferência
  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="container">
      {/* 3. Switch fixo no topo direito */}
      <button
        className="theme-toggle"
        onClick={() => setDarkMode(prev => !prev)}
        aria-label="Toggle dark mode"
      >
        {darkMode
          ? <MdLightMode color="#F3EDE6" size={48} />
          : <MdDarkMode color="#897869" size={48} />
        }
      </button>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portifolio" element={<Portifolio />} />
          <Route path="/conhecimentos" element={<Conhecimentos />} />
          <Route path="/sobremim" element={<SobreMim />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
