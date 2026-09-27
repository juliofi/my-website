import React from 'react';
import styles from './styles.module.css';
import { SlArrowRight } from 'react-icons/sl';

const Card = ({ nome, imagem}) => {
  return (
    <div className={styles.card}>
        <img className={styles.imagem} src={imagem} alt="nao achou o path" />
        <div className={styles.texto}>
            {nome}
        </div>
        <SlArrowRight className={styles.seta} aria-hidden="true" />
    </div>
  );
};

export default Card;
