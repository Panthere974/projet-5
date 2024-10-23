import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';
import logo from '../../assets/logo_navbar.svg';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo"/>
      <nav className={styles.navLinks}>
        <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : 'undefined')}>Accueil</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : 'undefined')}>A Propos</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
