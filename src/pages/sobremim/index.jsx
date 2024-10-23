import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css'; // Importa o CSS Modules
import puc from '../../assets/PUCRS.jpeg'; // Importa a imagem
import poo from '../../assets/poo.jpg';
import ferias from '../../assets/ferias.jpg';
import ages from '../../assets/ages.jpg';
import rocketseat from '../../assets/rocketseat.jpg';
import destaque from '../../assets/destaque.jpg';
import memorisely from '../../assets/memorisely.jpg';
import CertificadosAlura from '../../components/certificadosAlura';
import CertificadosRocketseat from '../../components/certificadosRocketseat';
import CardTimeline from '../../components/cardTimeline';
import Titulo from '../../components/titulo';
import Bolinha from '../../components/bolinha';

function SobreMim() {
  return (
    <div className={styles.conhecimentosContainer}>
      <header className={styles.header}>
        <Link to="/" className={styles.link}>
          <svg
            width="70"
            height="70"
            viewBox="0 0 70 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_633_1498)">
              <path
                d="M-8.46349e-05 48.09C0.046582 46.9234 0.489915 45.92 1.32992 45.08L10.0799 36.33C10.7332 35.63 11.5032 35.21 12.3899 35.07C13.2766 34.93 14.0932 35.0234 14.8399 35.35C15.5866 35.6767 16.2166 36.2134 16.7299 36.96C17.2432 37.7067 17.4999 38.5234 17.4999 39.41V43.75H56.9099C58.0766 43.75 59.1032 43.33 59.9899 42.49C60.8766 41.65 61.2966 40.6234 61.2499 39.41V21.91C61.2499 20.6967 60.8299 19.67 59.9899 18.83C59.1499 17.99 58.1233 17.5467 56.9099 17.5H21.9099C20.8366 17.5 19.9266 17.1967 19.1799 16.59C18.4332 15.9834 17.9666 15.26 17.7799 14.42C17.5932 13.58 17.5932 12.74 17.7799 11.9C17.9666 11.06 18.4332 10.3134 19.1799 9.66003C19.9266 9.00669 20.8366 8.70336 21.9099 8.75003H56.9099C60.5033 8.75003 63.5832 10.0334 66.1499 12.6C68.7166 15.1667 69.9999 18.27 69.9999 21.91V39.41C69.9999 43.05 68.7166 46.13 66.1499 48.65C63.5832 51.17 60.5033 52.4534 56.9099 52.5H17.4999V56.91C17.4999 57.8434 17.2432 58.6834 16.7299 59.43C16.2166 60.1767 15.5632 60.69 14.7699 60.97C13.9766 61.25 13.1599 61.32 12.3199 61.18C11.4799 61.04 10.7332 60.6434 10.0799 59.99L1.32992 51.24C0.396582 50.3534 -0.0467513 49.3034 -8.46349e-05 48.09Z"
                fill="#897869"
              />
            </g>
            <defs>
              <clipPath id="clip0_633_1498">
                <rect width="70" height="70" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Link>
      </header>
      <div className={styles.bodyContainer}>
        <div className={styles.titulos}>
          <Titulo margem="634px" titulo="PUCRS" subtitulo="26/02/2023" />
          <Titulo margem="652px" titulo="Alura" subtitulo="06/09/2023" />
          <Titulo margem="638px" titulo="Férias" subtitulo="13/12/2023" />
          <Titulo margem="682px" titulo="AGES" subtitulo="26/02/2024" />
          <Titulo margem="682px" titulo="Rocketseat" subtitulo="23/03/2024" />
          <Titulo margem="568px" titulo="Projeto Destaque" subtitulo="04/07/2024" />
          <Titulo margem="160px" titulo="Memorisely" subtitulo="04/07/2024" />
        </div>
        <div className={styles.line}>
          <Bolinha margem="680px"/>
          <Bolinha margem="700px"/>
          <Bolinha margem="680px"/>
          <Bolinha margem="730px"/>
          <Bolinha margem="730px"/>
          <Bolinha margem="620px"/>

       
        </div>
        <div className={styles.cards}>
          <CardTimeline margem="160px" imagem={puc} texto="Aos meus 18 anos, entrei na faculdade de Engenharia de Software na PUCRS. Lá tive meu primeiro contato com programação, na linguagem Java com a cadeira de Fundamentos da Programação, além de outras cadeiras fundamentais sobre a computação." />
          <CardTimeline margem="160px" imagem={poo} texto="Já no segundo semestre da faculdade, estava me aprofundando na programação com a cadeira de Programação Orientada a Objetos. Querendo saber mais sobre o conteúdo, assinei o plano da Alura, onde pude aprender muito mais rápido e de forma didática a lógica de programação, e futuramente outros conteúdos além da faculdade." />
          <CardTimeline margem="160px" imagem={ferias} texto="Durante o período das férias de verão pude aproveitar muito os cursos da Alura e aprender conteúdos fora da faculdade. Foi quando conheci o desenvolvimento web. Aprendi HTML, CSS e Javascript, e comecei a fazer meus primeiros projetos pessoais." />
          <CardTimeline margem="160px" imagem={ages} texto="Já aos 19 anos, no terceiro semestre, comecei a cursar a cadeira AGES 1 (Agência Experimental de Software), que foi para mim a melhor cadeira da faculdade até hoje. Nela, recebemos um cliente e trabalhamos no método SCRUM para desenvolver um MVP da proposta trazida pelo cliente. O nosso projeto,
Polimatech, era uma plataforma para vestibulandos e estudantes do ensino médio." />
          <CardTimeline margem="160px" imagem={rocketseat} texto="Após decidirmos as tecnologias na AGES, senti ainda mais a necessidade de aprender React, já queria dar esse passo no desenvolvimento web e assinei a plataforma da RocketSeat, onde já havia participado de um evento gratuito e gostei muito da didática deles. Durante esse terceiro semestre pude me aprofundar muito em React para o front-end e gostei muito de poder trabalhar em equipe na AGES." />
          <CardTimeline margem="160px" imagem={destaque} texto="No final do semestre acontece uma votação para eleger o melhor projeto da AGES e felizmente fomos premiados! " />
          <CardTimeline margem="160px" imagem={memorisely} texto="Depois do projeto da AGES me interessei muito por UI Design, queria aprender boas práticas para criar uma interface intuitiva e aprimorar minhas habilidades com o Figma. Foi aí que assinei o Memorisely e pude me aprofundar muito com a plataforma sobre UX/UI Design." />
        </div>
      </div>
    </div>
  );
}

export default SobreMim;
