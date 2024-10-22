import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Accommodation.module.scss';
import Slideshow from '../../components/Slideshow/Slideshow.js';

const Accommodation = () => {
  const location = useLocation();
  const { card } = location.state;

  return (
    <div className={styles.accommodation}>
      <Slideshow pictures={card.pictures}>

      </Slideshow>
    </div>
  );
};

export default Accommodation;
