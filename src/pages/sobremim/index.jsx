import { Link } from 'react-router-dom';
import styles from './styles.module.css'; 
import imagem2 from '../../assets/imagem2.jpg';
import imagem3 from '../../assets/imagem3.jpg';
import imagem4 from '../../assets/imagem4.jpg';
import imagem5 from '../../assets/imagem5.jpg';
import imagem6 from '../../assets/imagem6.jpg';
import imagem7 from '../../assets/imagem7.jpg';
import imagem8 from '../../assets/imagem8.jpg';
import imagem9 from '../../assets/imagem9.jpg';
import imagem10 from '../../assets/imagem10.jpg';
import imagem11 from '../../assets/imagem11.jpg';
import imagem12 from '../../assets/imagem12.jpg';
import imagem13 from '../../assets/imagem13.jpg';
import imagem14 from '../../assets/imagem14.jpg';
import imagem15 from '../../assets/imagem15.jpg';
import imagem16 from '../../assets/imagem16.jpg';
import imagem17 from '../../assets/imagem17.jpg';
import CardSobremim from '../../components/cardSobremim';
import Titulo from '../../components/titulo';
import Bolinha from '../../components/bolinha';

function Sobremim() {
  const imagensCard1 = [imagem2, imagem3];
  const imagensCard2 = [imagem4, imagem5, imagem6, imagem7];
  const imagensCard3 = [imagem8, imagem9, imagem10, imagem11, imagem12, imagem13];
  const imagensCard4 = [imagem14, imagem15];
  const imagensCard5 = [imagem16, imagem17];

  return (
    <div className={styles.sobremimContainer}>
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
        <div className={styles.titulos}>
          <Titulo margem="504px" titulo="Quem sou eu?" subtitulo="" />
          <Titulo margem="698px" titulo="2021" subtitulo="" />
          <Titulo margem="496px" titulo="2022/1" subtitulo="" />
          <Titulo margem="596px" titulo="2022/2" subtitulo="" />
          <Titulo margem="634px" titulo="Porque escolhi Engenharia de Software" subtitulo="" />
        </div>
        <div className={styles.line}>
          <Bolinha margem="522px" />
          <Bolinha margem="722px" />
          <Bolinha margem="520px" />
          <Bolinha margem="664px" />
          <div className={styles.bolinhaFinal} />
        </div>
        <div className={styles.cards}>
          <CardSobremim margem="60px" imagens={imagensCard1} texto="Me chamo Julio, tenho 20 anos e estou no 5º semestre de Engenharia de Software na PUCRS. Gosto muito de ficar no computador assistindo videos sobre computação e sobre setup. A seguir vou apresentar um pouco da minha trajetória até aqui e também mostrar porque escolhi a Engenharia de Software." />
          <CardSobremim margem="60px" imagens={imagensCard2} texto="Em 2021, entrei no universo da revenda de tênis limitados, chamado Resell. Explicando de forma resumida, existem tênis que são extremamente limitados e ao mesmo tempo desejados. Esses tênis são quase impossíveis de comprar no seu lançamento, pois esgotam em segundos, e assim que são esgotados já podem ser revendidos por bem mais que o preço do lançamento. Por isso, eu e a comunidade inteira do resell usávamos bots para conseguir comprar vários pares no lançamento e revender mais caro depois que esgotassem. Era uma concorrência, quem tivesse o bot com melhor eficiência, maior agilidade e melhores proxies (necessário para burlar o anti-bot do site) conseguia comprar mais pares" />
          <CardSobremim margem="60px" imagens={imagensCard3} texto="Entre o final de 2021 e a metade de 2022 eu estava muito avançado no resell. Já tinha várias amizades com pessoas do ramo e com programadores que faziam os bots. Nessa época tive grandes resultados, pois chegava a rodar vários bots simultaneamente e já tinha mais dinheiro acumulado para um estoque maior" />
          <CardSobremim margem="60px" imagens={imagensCard4} texto="Na metade de 2022 tive que dar adeus ao resell. Todas essas vendas que fazia através dos marketplaces(droper, stockx e até mercado livre) eram no nome da minha mãe porque eu tinha 17 anos. E como ela viu que estava movimentando muito (já tinha passado dos 100k de faturamento), não deixou mais eu usar o nome dela pras plataformas porque nunca declarei nada sobre imposto de renda e etc. O resell nessa época também deu uma enfraquecida, os preços de lançamento subiram, as quantidades de pares subiram e a demanda manteve a mesma." />
          <CardSobremim margem="60px" imagens={imagensCard5} texto="O resell foi o período mais marcante da minha vida. Durante o período que eu contabilizava o lucro (acredito que a partir de agosto de 21) tirando os meus gastos havia lucrado mais ou menos R$36.000, durante todo o período passa com certeza dos 50k. Porém esse lucro seria ainda maior se o preço dos bots não fosse tão caro, custam R$700, R$500 por mês e gastava com mais outras ferramentas como monitores do site e proxies. Gastava uns R$1500 todos os meses para manter as ferramentas e foi aí que vi o quão poderoso é saber criar uma ferramenta com programação. Os donos dos bots faturavam pelo menos 20k e o custo também era muito baixo, era muito mais vantajoso da parte deles pois eles ganhavam fixo parte do lucro de toda comunidade e ainda conseguiam pegar muitos pares pois sabiam usar muito bem o próprio bot. Nessa época, não sabia nada sobre programação e nem imaginava como e onde iria trabalhar, mas com certeza seria desenvolvendo ferramentas e aplicativos para trazer funcionalidade pra vida das pessoas. Sabendo que iria cursar Engenharia de Software, fui num evento chamado Open Campus da PUCRS, onde o Campus é aberto ao público e os cursos são apresentados. Lá eu vi que a PUC tem muita qualidade e que eu deveria cursar lá." />

        </div>
      </div>
    </div>
  );
}

export default Sobremim;
