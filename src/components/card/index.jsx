import React from 'react';
import styles from './styles.module.css'; // Importa o CSS Module

const Card = ({ nome }) => {
  return (
    <div className={styles.card}>
        <div className={styles.imagem}>
        </div>  
        <div className={styles.texto}>
            {nome}
        </div>
    </div>
  );
};

export default Card;
