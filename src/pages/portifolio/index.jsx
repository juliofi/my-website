import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import discord from '../../assets/discord.jpg';
import printStartup from '../../assets/printStartup.png';
import FlipCard from '../../components/cardPortifolio';
import videoDiscord from '../../assets/videoDiscord.mp4';
import videoFigma from '../../assets/videoFigma.mp4'
import videoStartup from '../../assets/videoStartup.mp4'
import porti from '../../assets/porti.jpg';
import { CiCircleInfo } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";

function Portifolio() {
  const [flipStates, setFlipStates] = React.useState([false, false]);

  const handleFlip = (index) => {
    setFlipStates((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <div className={styles.portifolioContainer}>
      <header className={styles.header}>
        <Link to="/" className={styles.link}>
          {/* SVG ícone */}
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
              <path d="..." fill="#897869" />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="50" height="50" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Link>
      </header>

      <div className={styles.bodyContainer}>
        <div className={styles.card}>
          <FlipCard
            imageSrc={discord}
            title="Monitor de Promoções"
            description1="É um bot que monitora em tempo real os produtos do site Kabum e envia uma notificação no discord quando o preço muda."
            description2="Feito em python, ele faz um webscraping da página periodicamente e percorre os produtos armazenando suas informações em JSON. . Quando alguma informação fo alterada, manda uma mensagem personalizada com todas as novas informações do produto (como pode ver na imagem da capa)."
            video={videoDiscord}
            flipped={flipStates[0]}
            onFlip={() => handleFlip(0)}
          />
          <div className={styles.svgs}>
            <button className={styles.svg1} onClick={() => handleFlip(0)}>
              <CiCircleInfo style={{ strokeWidth: 0.3 }} size={38} />
            </button>
            <a href="" className={styles.svg2} target="_blank" rel="noopener noreferrer">
              <VscGithubAlt size={36} />
            </a>
          </div>
        </div>

        <div className={styles.card}>
          <FlipCard
            imageSrc={porti}
            title="Minha Página"
            description1="Desenvolvi essa página inicialmente no figma usando meus conhecimentos de UX/UI Design que aprendi com os cursos do Memorisely."
            description2="Foi usado React com javascript e o deploy com Vercel."
            video={videoFigma}
            flipped={flipStates[1]}
            onFlip={() => handleFlip(1)}
          />
          <div className={styles.svgs}>
            <button className={styles.svg1} onClick={() => handleFlip(1)}>
              <CiCircleInfo style={{ strokeWidth: 0.3 }} size={38} />
            </button>
            <a href="" className={styles.svg2} target="_blank" rel="noopener noreferrer">
              <VscGithubAlt size={36} />
            </a>
          </div>
        </div>

        <div className={styles.card}>
          <FlipCard
            imageSrc={printStartup}
            title="Startup Rush"
            description1="Foi o teste técnico do programa Dell It Academy 2025. Startup Rush é uma competição de startups com 4 etapas: cadastro, batalhas, resultados e premiação"
            description2="O frontend foi desenvolvido em React com Typescript; o backend em Springboot com java; o design foi feito no figma; o deploy foi feito no Vercel; o banco de dados em PostgreSQL."
            video={videoStartup}
            flipped={flipStates[2]}
            onFlip={() => handleFlip(2)}
          />
          <div className={styles.svgs}>
            <button className={styles.svg1} onClick={() => handleFlip(2)}>
              <CiCircleInfo style={{ strokeWidth: 0.3 }} size={38} />
            </button>
            <a href="" className={styles.svg2} target="_blank" rel="noopener noreferrer">
              <VscGithubAlt size={36} />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Portifolio;
