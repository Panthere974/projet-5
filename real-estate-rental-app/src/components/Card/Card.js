import React from 'react';
import styles from './Card.module.scss';

const Card = ({ title, image }) => {
  return (
    <article className={styles.card} style={{ backgroundImage: `url(${image})` }}>
      <h2 className={styles.cardTitle}>{title}</h2>
    </article>
  );
};

export default Card;