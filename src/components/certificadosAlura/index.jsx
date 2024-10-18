import React from 'react';
import styles from './styles.module.css'; // Importa o CSS Modules
import certificado1 from '../../assets/certi1.jpg'
import certificado2 from '../../assets/certi2.jpg'
import certificado3 from '../../assets/certi3.jpg'

function CertificadosAlura() {
  return (
    <div className={styles.certificados}>
        <img src={certificado1}  className={styles.imagem} alt="nao achou path" />
        <img src={certificado2}  className={styles.imagem} alt="nao achou path" />
        <img src={certificado3}  className={styles.imagem} alt="nao achou path" />
    </div>
  );
}

export default CertificadosAlura;
