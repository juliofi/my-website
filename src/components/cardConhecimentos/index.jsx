import React, { useRef } from 'react';
import styles from './styles.module.css';

const CardConhecimentos = ({ imagem, texto }) => {


    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <img className={styles.imagem} src={imagem} alt="" />
                <div className={styles.texto}>
                    {texto}
                </div>
            </div>
        </div>
    );
};

export default CardConhecimentos;
