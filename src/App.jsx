import './App.css';
import Lottie from 'lottie-react';
import Anim from './assets/▶ anim.json';
import Card from './components/card'; // Importa o componente Card
import Contato from './components/contato'; // Importa o componente Contato

function App() {
  return (
    <>
      <div className="container">
        <Lottie
            animationData={Anim}
            loop={false} // Desabilita o loop
            onComplete={() => setIsAnimationComplete(true)} // Define que, ao finalizar, ajusta o estado
            className="lottie"
          />
          <div className="cardsContainer">
            <Card nome="Portifólio" />
            <Card nome="Conhecimentos" />
            <Card nome="Sobre mim" />
          </div>
          <Contato />
        </div>
    </>
  );
}

export default App;