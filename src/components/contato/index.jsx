import React from 'react';
import styles from './styles.module.css'; // Importa o CSS Module
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Pacote react-icons para os ícones

const Contato = () => {
  return (
    <div className={styles.container}>
      <a href="https://github.com/juliopontocom" target="_blank" rel="noopener noreferrer" className={styles.icon}>
        <FaGithub size={60} />
      </a>
      <a href="https://linkedin.com/in/juliocpsf" target="_blank" rel="noopener noreferrer" className={styles.icon}>
        <FaLinkedin size={69} />
      </a>
      <div className={styles.info}>
        <a href="" className={styles.ancora}>juliocpsf@gmail.com</a>
        <a href="" className={styles.ancora} >997996171</a>
      </div>
    </div>
  );
};

export default Contato;
