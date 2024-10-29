import React from 'react';
import styles from './styles.module.css';

const Bolinha = ({ margem }) => {
  return (
    <div className={styles.bolinha} style={{ marginBottom: margem }}/>    
  );
};

export default Bolinha;
