import Icon from '../Icon/Icon';
import styles from './FeaturesList.module.css';

const FeaturesList = ({ items, className = '' }) => (
  <ul className={`${styles.list} ${className}`}>
    {items.map((item) => {
      const label = typeof item === 'string' ? item : item.label;
      const icon = typeof item === 'string' ? null : item.icon;
      return (
        <li key={label} className={styles.item}>
          {icon && <Icon name={icon} size={20} />}
          {label}
        </li>
      );
    })}
  </ul>
);

export default FeaturesList;
