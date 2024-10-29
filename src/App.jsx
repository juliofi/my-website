import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home'; 
import Portifolio from './pages/portifolio'; 
import Conhecimentos from './pages/conhecimentos'; 
import SobreMim from './pages/sobremim'; 

function App() {
  return (

    <div className='container'>
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
