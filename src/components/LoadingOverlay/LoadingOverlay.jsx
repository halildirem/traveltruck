import Loader from '../Loader/Loader';
import styles from './LoadingOverlay.module.css';

const LoadingOverlay = ({
  title = 'Loading tracks…',
  message = 'Please wait while we fetch the best travel trucks for you',
}) => (
  <div className={styles.backdrop}>
    <div className={styles.card}>
      <Loader />
      <p className={styles.title}>{title}</p>
      <p className={styles.message}>{message}</p>
    </div>
  </div>
);

export default LoadingOverlay;
