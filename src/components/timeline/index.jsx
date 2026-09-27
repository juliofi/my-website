import { Children } from 'react';
import styles from './styles.module.css';
import Titulo from '../titulo';

export const Timeline = ({ children }) => (
  <ol className={styles.timeline}>{children}</ol>
);

export const TimelineItem = ({ titulo, subtitulo, children }) => {
  const [primeiro, ...resto] = Children.toArray(children);

  return (
    <li className={styles.item}>
      <div className={styles.label}>
        <Titulo titulo={titulo} subtitulo={subtitulo} />
      </div>
      <span className={styles.marker} aria-hidden="true" />
      <div className={styles.content}>{primeiro}</div>
      <span className={styles.rail} aria-hidden="true" />
      {resto.length > 0 && <div className={styles.resto}>{resto}</div>}
    </li>
  );
};
