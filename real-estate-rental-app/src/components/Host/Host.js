import styles from './Host.module.scss';

const Host = ({host}) => {
  return (
    <div className={styles.host}>
        <span>
            {host.name.split(" ")[0]}<br/>{host.name.split(" ")[1]}
        </span>
        <img src={host.picture} alt={host.name}></img>
    </div>
  );
};

export default Host;