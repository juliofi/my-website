import React from 'react';
import styles from './styles.module.css'; // Importa o CSS Module

function Projeto({ titulo, descricao }) {
  return (
    <div className={styles.projeto}>
        <div className={styles.projetoImg}>

        </div>
            <div className={styles.projetoText}>
                <span className={styles.titulo}>{titulo}</span>
                <span className={styles.descricao}>{descricao}</span>
            </div>
    </div>
  );
}

export default Projeto;
