import React from 'react';
import Marquee from 'react-fast-marquee';
import styles from './styles.module.css';

const Certificados = ({ certificadosFotos, margem }) => {
  return (
    <div style={{ marginBottom: margem }} className={styles.container}>
      <Marquee gradient={false} speed={50} direction="left">
        {certificadosFotos.map((certificado, index) => (
          <div key={index} className={styles.certificado}>
            <img src={certificado} alt={`Certificado ${index + 1}`} />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Certificados;