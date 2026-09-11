import Icon from '../Icon/Icon';
import { formatLocation } from '../../utils/format';
import styles from './CamperMeta.module.css';

const CamperMeta = ({ rating, reviewsCount, location, className = '' }) => (
  <div className={`${styles.meta} ${className}`}>
    <span className={styles.rating}>
      <Icon name="star" size={16} className={styles.star} />
      {Number(rating ?? 0).toFixed(1)}
      <span className={styles.reviews}>
        ({reviewsCount} {reviewsCount === 1 ? 'Review' : 'Reviews'})
      </span>
    </span>
    <span className={styles.location}>
      <Icon name="map" size={16} />
      {formatLocation(location)}
    </span>
  </div>
);

export default CamperMeta;
