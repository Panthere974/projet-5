import styles from './Banner.module.scss';

const banner = ({type}) => {
    return (
        <section className={`${styles.banner} ${styles[`banner--${type}`]}`}>
            <div className={styles.overlay}/>
            {type === 'home' && 
                <h1>Chez vous, <br className={styles.break}/>partout et ailleurs</h1>
            }
        </section>
    );
};
  
export default banner;