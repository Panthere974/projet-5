import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.scss';
import Banner from '../../components/Banner/Banner.js';
import Card from '../../components/Card/Card.js';
import backgroundImage1 from '../../assets/background_image_1.svg';
import accomodations from '../../logements.json';

const Home = () => {
  const [cards, setCards] = useState(accomodations);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (cards.length === 0) {
      setError('Aucune carte à afficher.');
    }
  }, [cards]);

  const handleCardClick = (card) => {
    navigate(`/accommodation/${card.id}`, { state: { card } });
    
  };

  return (
    <div className={styles.home}>
      <Banner title='Chez vous, partout et ailleurs' backgroundImage={backgroundImage1}></Banner>
      <section className={styles.cardsSection}>
        {error && <p className={styles.error}>{error}</p>}
        {cards.length > 0 ? (
          cards.map((card) => (
            <Card key={card.id} title={card.title} image={card.cover} onClick={() => handleCardClick(card)}/>
          ))
        ) : (
          <p>Aucune carte à afficher.</p>
        )}
      </section>
    </div>
  );
};

export default Home;