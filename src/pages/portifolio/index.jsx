import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css'; // Importa o CSS Module
import Projeto from '../../components/projeto'; // Importa o componente Projeto
import Seta from '../../components/seta';

function Portifolio() {
  return (
    <div className={styles.portifolioContainer}>
        <div className={styles.backButtonContainer}>
            <Link to="/" className={styles.backButton}>
                <Seta></Seta>
            </Link>
        </div>
        <div className={styles.projetosContainer}>
            <Projeto 
            titulo="Projeto 1" 
            descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
            />
            <Projeto 
            titulo="Projeto 2" 
            descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
            />
        </div>
        <span></span>
    </div>
  );
}

export default Portifolio;
