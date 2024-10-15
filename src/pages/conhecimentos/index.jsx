import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css'; // Importa o CSS Modules
import Seta from '../../components/seta';
import Fase from '../../components/fases';
import puc from '../../assets/PUCRS.jpeg'; // Importa a imagem
import poo from '../../assets/poo.jpg'
import ferias from '../../assets/ferias.jpg'
import ages from '../../assets/ages.jpg'

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
                descricao="Aos meus 18 anos, entrei na faculdade de Engenharia de Software na PUCRS. Lá tive meu primeiro contato com programação, na linguagem Java com a cadeira de Fundamentos da Programação, além de outras cadeiras fundamentais sobre a computação."
                imagem={puc} // Agora usamos a variável importada
                className={styles.fase1}
              />
            </div>
            <div className={styles.fase2}>
              <Fase
                titulo="Alura"
                data="06/09/2023"
                descricao="Já no segundo semestre da faculdade, estava me aprofundando na programação com a cadeira de Programação Orientada a Objetos. Querendo saber mais sobre o conteúdo, assinei o plano da Alura, onde pude aprender muito mais rápido e de forma didática a lógica de programação, e futuramente outros conteúdos além da faculdade"
                imagem={poo} // Substitua pela URL da imagem da Alura
              />
            </div>
            <div className={styles.fase3}>
              <Fase
                titulo="Férias"
                data="13/12/2023"
                descricao="Durante o período das férias de verão pude aproveitar muito os cursos da Alura e aprender conteúdos fora da faculdade. Foi quando conheci o desenvolvimento web. Aprendi HTML, CSS e Javascript, e comecei a fazer meus primeiros projetos pessoais"
                imagem={ferias} // Substitua pela URL da imagem das férias
              />
            </div>
            <div className={styles.fase4}>
              <Fase
                titulo="AGES"
                data="26/02/2024"
                descricao="Já aos 19 anos, no terceiro semestre, comecei a cursar a cadeira ”AGES 1” (Agência Experimental de Software), que foi para mim a melhor cadeira da faculdade até hoje. Nela, junto com meu time, recebemos o cliente Vinicius da Rosa que foi nosso stakeholder para o projeto Polymatech."
                imagem={ages} // Substitua pela URL da imagem da AGES
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conhecimentos;
