import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './Accommodation.module.scss';
import Slideshow from '../../components/Slideshow/Slideshow.js';
import Host from '../../components/Host/Host.js';
import Tags from '../../components/Tags/Tags.js';
import Rating from '../../components/Rating/Rating.js';
import Collapse from '../../components/Collapse/Collapse.js';
import accomodations from '../../logements.json';

const Accommodation = () => {
  const { id } = useParams();
  const accomodation = accomodations.find(accomodation => accomodation.id === id);
  const navigate = useNavigate();

  useEffect(() => {
    if (!accomodation) {
      navigate('/error');
    }
  }, [accomodation, navigate]);

  if (!accomodation) {
    return null;
  }

  return (
    <div className={styles.accommodation}>
      <Slideshow pictures={accomodation.pictures}></Slideshow>
      <section className={styles.informations}>
        <div className={`${styles.informationsContent} ${styles['informationsContent--left']}`}>
          <div>
            <h1>
              {accomodation.title}
            </h1>
            <span>{accomodation.location}</span>
          </div>
          <Tags className={styles.tags} tags={accomodation.tags}></Tags>
        </div>
        <div className={`${styles.informationsContent} ${styles['informationsContent--right']}`}>
          <Host host={accomodation.host}></Host>
          <Rating rating={accomodation.rating}></Rating>
        </div>
      </section>
      <section className={styles.details}>
        <Collapse title='Description' children={accomodation.description}></Collapse>
        <Collapse title='Équipements' children={
          <ul>
            {accomodation.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        }/>
        </section>
    </div>
  );
};

export default Accommodation;
