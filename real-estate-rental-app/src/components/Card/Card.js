import React from 'react';
import styles from './Card.module.scss';

const Card = ({ title, image, onClick }) => {
  return (
    <article className={styles.card} style={{backgroundImage: `url(${image})`}} onClick={onClick}>
      <h2 className={styles.cardTitle}>{title}</h2>
    </article>
  );
};

export default Card;