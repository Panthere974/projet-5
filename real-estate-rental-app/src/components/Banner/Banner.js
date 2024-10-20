import styles from './Banner.module.scss';

const banner = ({title, backgroundImage}) => {
    return (
        <section className={styles.banner} style={{backgroundImage: `url(${backgroundImage})`}}>
            <h1 className={styles.title}>{title}</h1>
        </section>
    );
};
  
export default banner;
  