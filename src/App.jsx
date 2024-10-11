import './App.css';
import Lottie from 'lottie-react';
import Hello from './assets/hello.json';
import Card from './components/card'; // Importa o componente Card
import Contato from './components/contato'; // Importa o componente Contato

function App() {
  return (
    <>
      <div className="container">
        <Lottie loop={true} animationData={Hello} style={{ width: 300, margin: '0 auto' }} />
          <div className="cardsContainer">
            <Card nome="Portifólio" />
            <Card nome="Trajetória" />
            <Card nome="Certificações" />
          </div>
          <Contato />
        </div>
    </>
  );
}

export default App;