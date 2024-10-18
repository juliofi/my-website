import React from 'react';
import styles from './styles.module.css'; // Importa o CSS Modules

function Fase({ titulo, data, descricao, imagem }) {
  return (
    <div className={styles.timelineItem}>
        <div className={styles.esquerda}>
            <div className={styles.titulo}>
                {titulo}
            </div>
            <div className={styles.subtitulo}>
                {data}
            </div>
        </div>

        <div className={styles.direita}>
        <div className={styles.texto}>
            {descricao}
        </div>
        <img src={imagem}  className={styles.imagem} alt="nao achou path" />
        </div>
    </div>
  );
}

export default Fase;
