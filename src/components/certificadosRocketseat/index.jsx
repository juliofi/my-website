import React from 'react';
import styles from './styles.module.css'; // Importa o CSS Modules
import certificado4 from '../../assets/certi4.jpg'
import certificado5 from '../../assets/certi5.jpg'

function CertificadosRocketseat() {
  return (
    <div className={styles.certificados}>
        <img src={certificado4}  className={styles.imagem} alt="nao achou path" />
        <img src={certificado5}  className={styles.imagem} alt="nao achou path" />
    </div>
  );
}

export default CertificadosRocketseat;
