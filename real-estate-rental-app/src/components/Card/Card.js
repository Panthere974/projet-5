import { Link } from 'react-router-dom';
import styles from './Card.module.scss';

const Card = ({ id, title, cover}) => {
  return (
    <Link to={`/accommodation/${id}`} className={styles.card} style={{backgroundImage: `url(${cover})`}}>
      <div className={styles.overlay}/>
      <h2>{title}</h2>
    </Link>
  );
};

export default Card;