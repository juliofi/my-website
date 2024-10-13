import React from 'react';
import Lottie from 'lottie-react';
import Anim from '../../assets/▶ anim.json'
import Card from '../../components/card'; // Importa o componente Card
import Contato from '../../components/contato'; // Importa o componente Contato
import { Link } from 'react-router-dom';
import styles from './styles.module.css'

function Home() {
  return (
    <div className={styles.container}>
      <Lottie
        animationData={Anim}
        loop={false} // Desabilita o loop da animação
        className={styles.lottie}
      />
      <div className={styles.cardsContainer}>
        {/* Links para as páginas */}
        <Link to="/portifolio">
          <Card nome="Portifólio" />
        </Link>
        <Link to="/conhecimentos">
          <Card nome="Conhecimentos" />
        </Link>
        <Link to="/sobremim">
          <Card nome="Sobre mim" />
        </Link>
      </div>
      <Contato />
    </div>
  );
}

export default Home;
