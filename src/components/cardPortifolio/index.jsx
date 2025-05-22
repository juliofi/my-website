import React from 'react';
import styles from './styles.module.css';

function CardPortifolio({ imageSrc, title, description1, description2, video, flipped, onFlip }) {
  return (
    <div className={styles.container} onClick={onFlip}>
      <div className={`${styles.flipCard} ${flipped ? styles.flipped : ''}`}>
        <div className={`${styles.front} ${styles.face}`}>
          <img className={styles.imagem} src={imageSrc} alt={title} />
        </div>
        <div className={`${styles.back} ${styles.face}`}>
          <video className={styles.videoBackground} autoPlay loop muted>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={styles.overlay}>
            <div className={styles.titulo}>{title}</div>
            <div className={styles.descricao}>
              <div className={styles.texto}>{description1}</div>
              <div className={styles.texto}>{description2}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPortifolio;
