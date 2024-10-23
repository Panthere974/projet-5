import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';
import logo from '../../assets/logo_navbar.svg';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="Logo"/>
      <ul className={styles.navLinks}>
        <li><NavLink to="/" className={({ isActive }) => (isActive ? styles.active : 'undefined')}>Accueil</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : 'undefined')}>A Propos</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
