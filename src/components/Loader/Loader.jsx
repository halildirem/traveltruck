import styles from './Loader.module.css';

const Loader = ({ size = 48 }) => (
  <span
    className={styles.spinner}
    style={{ width: size, height: size }}
    role="status"
    aria-label="Loading"
  />
);

export default Loader;
