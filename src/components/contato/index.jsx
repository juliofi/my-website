import React from 'react';
import styles from './styles.module.css';
import { SlSocialLinkedin } from "react-icons/sl";
import { VscGithubAlt } from "react-icons/vsc";

const Contato = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <a href="https://github.com/juliopontocom" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <VscGithubAlt size={40} />
        </a>
        <a href="https://linkedin.com/in/juliocpsf" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <SlSocialLinkedin size={40} />
        </a>
      </div>
      <div className={styles.info}>
        <a className={styles.ancora}>juliocpsf@gmail.com</a>
        <a className={styles.ancora}>997996171</a>
      </div>
    </div>
  );
};

export default Contato;
