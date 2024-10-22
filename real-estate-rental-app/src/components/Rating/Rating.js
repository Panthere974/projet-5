import styles from './Rating.module.scss';

const Tags = ({rating}) => {
    const stars = [];
    

    for(let i = 0; i < 5; i++) {
        stars.push(<i key={i} className="fa-solid fa-star" style={{color: i < rating ? '#FF6060' : '#E3E3E3'}}></i>);
    }

    return (
        <div className={styles.rating}>
            {stars}
        </div>
    );
};

export default Tags;