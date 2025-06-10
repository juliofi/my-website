import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/home'; 
import Portifolio from './pages/portifolio'; 
import Conhecimentos from './pages/conhecimentos'; 
import SobreMim from './pages/sobremim'; 

// Configuração das flags futuras do React Router v7
const router = {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
};

function App() {
  return (
    <div className="container">
      <Router {...router}>
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
