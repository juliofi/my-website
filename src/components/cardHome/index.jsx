import React from 'react';
import styles from './styles.module.css';

const Card = ({ nome, imagem}) => {
  return (
    <div className={styles.card}>
        <img className={styles.imagem} src={imagem} alt="nao achou o path" />
        <div className={styles.texto}>
            {nome}
        </div>
    </div>
  );
};

export default Card;
