import React from 'react';
import Lottie from 'lottie-react';
import HeadAnimation from '../../assets/head.json'; // Importa o arquivo JSON da animação Lottie
import { Link } from 'react-router-dom';
import styles from './styles.module.css'; // Importa o CSS Modules
import Seta from '../../components/seta';
import Fase from '../../components/fases';
import puc from '../../assets/PUCRS.jpeg'; // Importa a imagem
import poo from '../../assets/poo.jpg';
import ferias from '../../assets/ferias.jpg';
import ages from '../../assets/ages.jpg';
import rocketseat from '../../assets/rocketseat.jpg';
import destaque from '../../assets/destaque.jpg';
import memorisely from '../../assets/memorisely.jpg';
import CertificadosAlura from '../../components/certificadosAlura'

function Conhecimentos() {
  return (
    <div className={styles.conhecimentosContainer}>
      {/* Header fixado com animação Lottie */}
      <header className={styles.header}>
        <Link to="/" className={styles.lottieLink}>
          <Lottie
            animationData={HeadAnimation}
            loop={false} // Desabilita o loop da animação
            className={styles.lottie}
          />
        </Link>
      </header>
      <div className={styles.bodyContainer}>
        <div className={styles.line}>
          <div className={styles.bullet1}></div>
          <div className={styles.bullet2}></div>
          <div className={styles.bullet3}></div>
          <div className={styles.bullet4}></div>
          <div className={styles.bullet5}></div>
          <div className={styles.bullet6}></div>
          <div className={styles.bullet7}></div>
        </div>
        <div className={styles.timelineContainer}>
          <div className={styles.fasesContainer}>
            <div className={styles.fase1}>
              <Fase
                titulo="PUCRS"
                data="26/02/2023"
                descricao="Aos meus 18 anos, entrei na faculdade de Engenharia de Software na PUCRS. Lá tive meu primeiro contato com programação, na linguagem Java com a cadeira de Fundamentos da Programação, além de outras cadeiras fundamentais sobre a computação."
                imagem={puc}
                className={styles.fase1}
              />
            </div>
            <div className={styles.fase2}>
              <Fase
                titulo="Alura"
                data="06/09/2023"
                descricao="Já no segundo semestre da faculdade, estava me aprofundando na programação com a cadeira de Programação Orientada a Objetos. Querendo saber mais sobre o conteúdo, assinei o plano da Alura, onde pude aprender muito mais rápido e de forma didática a lógica de programação, e futuramente outros conteúdos além da faculdade."
                imagem={poo}
              />
            </div>
            <div className={styles.fase3}>
              <Fase
                titulo="Férias"
                data="13/12/2023"
                descricao="Durante o período das férias de verão pude aproveitar muito os cursos da Alura e aprender conteúdos fora da faculdade. Foi quando conheci o desenvolvimento web. Aprendi HTML, CSS e Javascript, e comecei a fazer meus primeiros projetos pessoais."
                imagem={ferias}
              />
            </div>
            <CertificadosAlura></CertificadosAlura>
            <div className={styles.fase4}>
              <Fase
                titulo="AGES"
                data="26/02/2024"
                descricao="Já aos 19 anos, no terceiro semestre, comecei a cursar a cadeira AGES 1 (Agência Experimental de Software), que foi para mim a melhor cadeira da faculdade até hoje. Nela, recebemos um cliente e trabalhamos no método SCRUM para desenvolver um MVP da proposta trazida pelo cliente. O nosso projeto,
                Polimatech, era uma plataforma para vestibulandos e estudantes do ensino médio."
                imagem={ages}
              />
            </div>
            <div className={styles.fase5}>
              <Fase
                titulo="RocketSeat"
                data="23/03/2024"
                descricao="Após decidirmos as tecnologias na AGES, senti ainda mais a necessidade de aprender React, já queria dar esse passo no desenvolvimento web e assinei a plataforma da RocketSeat, onde já havia participado de um evento gratuito e gostei muito da didática deles. Durante esse terceiro semestre pude me aprofundar muito em React para o front-end e gostei muito de poder trabalhar em equipe na AGES."
                imagem={rocketseat}
              />
            </div>
            <div className={styles.fase6}>
              <Fase
                titulo={<><span>Projeto</span><br /><span>Destaque</span></>}
                data="04/07/2024"
                descricao="No final do semestre acontece uma votação para eleger o melhor projeto da AGES e felizmente fomos premiados! "
                imagem={destaque}
              />
            </div>
            <div className={styles.fase7}>
              <Fase
                titulo="Memorisely"
                data="04/07/2024"
                descricao="Depois do projeto da AGES me interessei muito por UI Design, queria aprender boas práticas para criar uma interface intuitiva e aprimorar minhas habilidades com o Figma. Foi aí que assinei o Memorisely e pude me aprofundar muito com a plataforma sobre UX/UI Design."
                imagem={memorisely}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conhecimentos;
