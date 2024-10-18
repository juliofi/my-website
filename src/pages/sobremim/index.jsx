import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css'; // Importa o CSS Modules
import HeadAnimation from '../../assets/head.json'; // Importa o arquivo JSON da animação Lottie
import Lottie from 'lottie-react';

function SobreMim() {
  return (
    <div className={styles.conhecimentosContainer}>
      <header className={styles.header}>
        <Link to="/" className={styles.lottieLink}>
          <Lottie
            animationData={HeadAnimation}
            loop={false}
            className={styles.lottie}
          />
        </Link>
      </header>
      <h1>Aqui vai ficar a história</h1>
      <span></span>
    </div>
  );
}

export default SobreMim;
