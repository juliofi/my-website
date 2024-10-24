import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './styles.module.css'; // Importa o CSS Module

const ImageSlider = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // 5 segundos para cada imagem

    return () => clearInterval(interval); // Cleanup interval
  }, [images.length]);

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.imageContainer}>
        <AnimatePresence mode="wait"> {/* Substitui o exitBeforeEnter */}
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt={`Imagem ${currentImage + 1}`}
            className={styles.image}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.5 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>

      {/* Linha de Progresso */}
      <motion.div
        className={styles.progressBar}
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 5, ease: 'linear' }}
        key={currentImage}
      />
    </div>
  );
};

export default ImageSlider;
