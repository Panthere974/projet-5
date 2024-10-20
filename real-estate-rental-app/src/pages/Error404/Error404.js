import { NavLink } from 'react-router-dom';
import styles from './Error404.module.scss';
import message404 from '../../assets/404.svg';

const Error404 = () => {
  return (
    <div className={styles.error404}>
      <img src={message404} alt="404 Not Found"/>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/">Retourner sur la page d’accueil</NavLink>
    </div>
  );
};

export default Error404;
