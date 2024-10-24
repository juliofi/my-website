import React from 'react';
import Lottie from 'lottie-react';
import Julio from '../../assets/julio.json'
import CardHome from '../../components/cardHome'; // Importa o componente Card
import Contato from '../../components/contato'; // Importa o componente Contato
import { Link } from 'react-router-dom';
import styles from './styles.module.css'
import Conhecimentos from '../../assets/conhecimentos.png'
import Portifolio from '../../assets/portifolio.png'
import Sobremim from '../../assets/sobremim.png'

function Home() {
  return (
    <div className={styles.container}>
      <Lottie
        animationData={Julio}
        loop={false} // Desabilita o loop da animação
        className={styles.lottie}
      />
      <div className={styles.cardsContainer}>
        {/* Links para as páginas */}
        <Link to="/conhecimentos">
          <CardHome nome="Conhecimentos" imagem={Conhecimentos}/>
        </Link>
        <Link to="/portifolio">
          <CardHome nome="Portifólio" imagem={Portifolio}/>
        </Link>
        <Link to="/sobremim">
          <CardHome nome="Sobre mim" imagem={Sobremim}/>
        </Link>
      </div>
      <Contato />
    </div>
  );
}

export default Home;
