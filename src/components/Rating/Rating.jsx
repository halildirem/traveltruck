import Icon from '../Icon/Icon';
import styles from './Rating.module.css';

const Rating = ({ value = 0, max = 5 }) => (
  <span className={styles.stars} aria-label={`Rating ${value} of ${max}`}>
    {Array.from({ length: max }, (_, index) => (
      <Icon
        key={index}
        name="star"
        size={16}
        className={index < Math.round(value) ? styles.active : styles.inactive}
      />
    ))}
  </span>
);

export default Rating;
