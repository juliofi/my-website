import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css'; // Importa o CSS Modules
import Seta from '../../components/seta';
import Fase from '../../components/fases';

function Conhecimentos() {
  return (
    <div className={styles.conhecimentosContainer}>
         <div className={styles.backButtonContainer}>
            <Link to="/" className={styles.backButton}>
                <Seta></Seta>
            </Link>
        </div>
        <div className={styles.bodyContainer}>
          <div className={styles.line}>
            <div className={styles.bullet1}></div>
            <div className={styles.bullet2}></div>
            <div className={styles.bullet3}></div>
            <div className={styles.bullet4}></div>
          </div>
          <div className={styles.timelineContainer}>
            <div className={styles.fasesContainer}>
              <div className={styles.fase1}>
                <Fase
                  titulo="PUCRS"
                  data="26/02/2023"
                  descricao="Aos meus 18 anos, entrei na faculdade de Engenharia de Software na PUCRS."
                  imagem="puc-image-url" // Substitua pela URL da imagem
                  className={styles.fase1}
                />
              </div>
              <div className={styles.fase2}>
                <Fase
                  titulo="Alura"
                  data="06/09/2023"
                  descricao="No segundo semestre, comecei a estudar programação orientada a objetos na Alura."
                  imagem="alura-image-url" // Substitua pela URL da imagem
                />
              </div>
              <div className={styles.fase3}>
                <Fase
                  titulo="Férias"
                  data="13/12/2023"
                  descricao="Durante as férias, desenvolvi projetos pessoais e aperfeiçoei minhas habilidades."
                  imagem="ferias-image-url" // Substitua pela URL da imagem
                />
              </div>
              <div className={styles.fase4}>
                <Fase
                  titulo="AGES"
                  data="26/02/2024"
                  descricao="Entrei na AGES para iniciar um projeto inovador em equipe."
                  imagem="ages-image-url" // Substitua pela URL da imagem
                />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Conhecimentos;