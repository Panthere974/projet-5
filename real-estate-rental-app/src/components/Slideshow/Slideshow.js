import React, { useState } from 'react';
import styles from './Slideshow.module.scss';

const Slideshow = ({pictures}) => {
  const [index, setIndex] = useState(0);

  const goToPrevious = () => {
    setIndex((index) => (index > 0 ? index - 1 : pictures.length - 1));
  };

  const goToNext = () => {
    setIndex((index) => (index < pictures.length - 1 ? index + 1 : 0));
  };

  return (
    <section className={styles.slideshow} style={{backgroundImage: `url(${pictures[index]})`}}>
        {pictures.length > 1 && (
        <>
          <i className={'fa-solid fa-chevron-left fa-2xl'} onClick={goToPrevious}></i>
          <i className={'fa-solid fa-chevron-right fa-2xl'} onClick={goToNext}></i>
        </>
        )}
      </section>
  );
};

export default Slideshow;
