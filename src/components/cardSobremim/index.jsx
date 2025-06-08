import React, { useRef } from 'react';
import styles from './styles.module.css'; 
import ImageSlider from '../imageSlider';

const CardSobremim = ({ imagens, texto, margem}) => {

    return (
        <div className={styles.container}>
            <div style={{ marginBottom: margem }} className={styles.card}>
                <ImageSlider images={imagens} />
                <div className={styles.texto}>
                    {texto}
                </div>
            </div>
        </div>
    );
};

export default CardSobremim;
