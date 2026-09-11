import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import { useClearFilters } from '../../hooks/useClearFilters';
import styles from './EmptyState.module.css';

const EmptyState = () => {
  const clearFilters = useClearFilters();

  return (
    <div className={styles.wrapper}>
      <svg
        className={styles.art}
        viewBox="0 0 260 150"
        fill="none"
        stroke="#829b91"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M8 96 54 40l30 34 26-24 44 46" opacity="0.5" />
        <path d="M120 70l24-22 40 44" opacity="0.5" />
        <path d="M40 116h150v-28a10 10 0 0 0-10-10h-40l-16-18H58a10 10 0 0 0-10 10z" />
        <path d="M48 78h84v20H44" />
        <circle cx="78" cy="116" r="12" />
        <circle cx="160" cy="116" r="12" />
        <path d="M40 116H24" />
        <circle cx="196" cy="70" r="22" fill="#829b91" stroke="none" />
        <path d="M190 64a8 8 0 1 0 12 12 8 8 0 0 0-12-12zM201 75l7 7" stroke="#fff" />
      </svg>
      <h2 className={styles.title}>No campers found</h2>
      <p className={styles.text}>
        We couldn&apos;t find any campers that match your filters.
        <br />
        Try adjusting your search or clearing some filters.
      </p>
      <div className={styles.actions}>
        <Button variant="secondary" onClick={clearFilters}>
          <Icon name="close" size={18} />
          Clear filters
        </Button>
        <Button onClick={clearFilters}>View all campers</Button>
      </div>
    </div>
  );
};

export default EmptyState;
