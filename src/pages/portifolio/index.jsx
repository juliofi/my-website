import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css'; // Importa o CSS Modules
import discord from '../../assets/discord.jpg';
import FlipCard from '../../components/cardPortifolio'; // Importe o novo componente FlipCard
import videoDiscord from '../../assets/videoDiscord.mp4'; // Importe o vídeo
import videoFigma from '../../assets/videoFigma.mp4'
import porti from '../../assets/porti.jpg'

function Portifolio() {
  return (
    <div className={styles.portifolioContainer}>
      <header className={styles.header}>
        <Link to="/" className={styles.link}>
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_633_1590)">
              <path d="M-6.04535e-05 34.3499C0.0332729 33.5166 0.349939 32.7999 0.949939 32.1999L7.19994 25.9499C7.66661 25.4499 8.21661 25.1499 8.84994 25.0499C9.48327 24.9499 10.0666 25.0166 10.5999 25.2499C11.1333 25.4832 11.5833 25.8666 11.9499 26.3999C12.3166 26.9332 12.4999 27.5166 12.4999 28.1499V31.2499H40.6499C41.4833 31.2499 42.2166 30.9499 42.8499 30.3499C43.4833 29.7499 43.7833 29.0166 43.7499 28.1499V15.6499C43.7499 14.7832 43.4499 14.0499 42.8499 13.4499C42.2499 12.8499 41.5166 12.5332 40.6499 12.4999H15.6499C14.8833 12.4999 14.2333 12.2832 13.6999 11.8499C13.1666 11.4166 12.8333 10.8999 12.6999 10.2999C12.5666 9.69992 12.5666 9.09992 12.6999 8.49992C12.8333 7.89992 13.1666 7.36658 13.6999 6.89992C14.2333 6.43325 14.8833 6.21658 15.6499 6.24992H40.6499C43.2166 6.24992 45.4166 7.16658 47.2499 8.99992C49.0833 10.8332 49.9999 13.0499 49.9999 15.6499V28.1499C49.9999 30.7499 49.0833 32.9499 47.2499 34.7499C45.4166 36.5499 43.2166 37.4666 40.6499 37.4999H12.4999V40.6499C12.4999 41.3166 12.3166 41.9166 11.9499 42.4499C11.5833 42.9832 11.1166 43.3499 10.5499 43.5499C9.98327 43.7499 9.39994 43.7999 8.79994 43.6999C8.19994 43.5999 7.66661 43.3166 7.19994 42.8499L0.949939 36.5999C0.283273 35.9666 -0.0333938 35.2166 -6.04535e-05 34.3499Z" fill="#897869" />
            </g>
            <defs>
              <clipPath id="clip0_633_1590">
                <rect width="50" height="50" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Link>
      </header>
      <div className={styles.bodyContainer}>
        <FlipCard
          imageSrc={discord}
          title="Monitor de Promoções"
          description1="É um bot que monitora em tempo real os produtos do site Kabum e envia uma notificação no discord quando o preço muda."
          description2="Feito em python, ele faz um webscraping da página periodicamente e percorre os produtos armazenando suas informações em JSON. . Quando alguma informação fo alterada, manda uma mensagem personalizada com todas as novas informações do produto  (como pode ver na imagem da capa)."
          video={videoDiscord}
        />
         <FlipCard
          imageSrc={porti}
          title="Minha Página"
          description1="Desenvolvi essa página inicialmente no figma usando meus conhecimentos de UX/UI Design que aprendi com os cursos do Memorisely. Foi usado React com javascript e o deploy com Vercel."
          description2=" "
          video={videoFigma}
        />
      </div>
    </div>
  );
}

export default Portifolio;
