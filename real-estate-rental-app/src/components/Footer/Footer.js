import styles from './Footer.module.scss';
import logo from '../../assets/logo_footer.svg';

const Footer = () => {
  return (
    <nav className={styles.footer}>
      <img src={logo} alt="Logo"/>
      <span>© 2020 Kasa. All <br className={styles.break}/>rights reserved</span>
    </nav>
  );
};

export default Footer;
