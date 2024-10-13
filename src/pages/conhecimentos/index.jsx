import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css'; // Importa o CSS Modules
import Seta from '../../components/seta'

function Conhecimentos() {
  return (
    <div className={styles.conhecimentosContainer}>
         <div className={styles.backButtonContainer}>
            <Link to="/" className={styles.backButton}>
                <Seta></Seta>
            </Link>
        </div>
        <h1>Aqui ficaram seus certificados</h1>
        <span></span>
    </div>
  );
}

export default Conhecimentos;
