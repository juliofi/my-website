import React from 'react';
import styles from './styles.module.css'; // Importa o CSS Module

const CardTimeline = ({ imagem, texto }) => {
    return (
        <div className={styles.card}>
            <img className={styles.imagem} src={imagem} alt="" />
            <div className={styles.texto}>
                {texto}
            </div>
        </div>
    );
};

export default CardTimeline;
