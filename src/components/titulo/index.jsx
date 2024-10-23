import React from 'react';
import styles from './styles.module.css'; // Importa o CSS Module

const Titulo = ({ titulo, subtitulo }) => {
  return (
    <div className={styles.texto}>
        <div className={styles.titulo}>
            {titulo}
        </div>  
        <div className={styles.subtitulo}>
            {subtitulo}
        </div>
    </div>
  );
};

export default Titulo;
