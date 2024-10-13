import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home'; // Página inicial (Home)
import Portifolio from './pages/portifolio'; // Página Portifolio
import Conhecimentos from './pages/conhecimentos'; // Página Conhecimentos
import SobreMim from './pages/sobremim'; // Página Sobre Mim

function App() {
  return (

    <div className='container'>
        <Router>
        <Routes>
          {/* Rota inicial para Home */}
          <Route path="/" element={<Home />} />
          {/* Outras páginas */}
          <Route path="/portifolio" element={<Portifolio />} />
          <Route path="/conhecimentos" element={<Conhecimentos />} />
          <Route path="/sobremim" element={<SobreMim />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
