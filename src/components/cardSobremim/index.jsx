import React, { useRef } from 'react';
import styles from './styles.module.css'; 
import ImageSlider from '../imageSlider';

const CardSobremim = ({ imagens, texto }) => {

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <ImageSlider images={imagens} />
                <div className={styles.texto}>
                    {texto}
                </div>
            </div>
        </div>
    );
};

export default CardSobremim;
