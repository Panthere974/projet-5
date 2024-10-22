import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Accommodation.module.scss';
import Slideshow from '../../components/Slideshow/Slideshow.js';
import Host from '../../components/Host/Host.js'
import Tags from '../../components/Tags/Tags.js'
import Rating from '../../components/Rating/Rating.js'
import Collapse from '../../components/Collapse/Collapse.js'

const Accommodation = () => {
  const location = useLocation();
  const { card } = location.state;

  return (
    <div className={styles.accommodation}>
      <Slideshow pictures={card.pictures}></Slideshow>
      <section className={styles.details}>
        <div className={styles.detailsContent}>
          <div className={styles.titleAndLocation}>
            <h1>
              {card.title}
            </h1>
            <span>{card.location}</span>
          </div>
          <Host host={card.host}></Host>
        </div>
        <div className={styles.detailsContent}>
          <Tags tags={card.tags}></Tags>
          <Rating rating={card.rating}></Rating>
        </div>
        <div className={styles.detailsContent}>
          <Collapse title='Description' children={card.description}></Collapse>
          <Collapse title='Équipements' children={
            <ul>
              {card.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          } />
        </div>
      </section>
    </div>
  );
};

export default Accommodation;
