import React from 'react';
import styles from './Home.module.scss';
import Banner from '../../components/Banner/Banner.js';
import Card from '../../components/Card/Card.js';
import accomodations from '../../logements.json';

const Home = () => {

  return (
    <div className={styles.home}>
      <Banner type='home'></Banner>
      <section className={styles.cardsSection}>
        {accomodations.map((accommodation) => (
            <Card key={accommodation.id} id={accommodation.id} title={accommodation.title} cover={accommodation.cover}/>
        ))}
      </section>
    </div>
  );
};

export default Home;