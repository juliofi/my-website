import React, { useRef } from 'react';
import styles from './styles.module.css'; 
import ImageSlider from '../imageSlider';

const CardSobremim = ({ imagens, texto, margem, audio }) => {
    const audioRef = useRef(null); 

    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
        audioRef.current = new Audio(audio);
        audioRef.current.play();
    };

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
