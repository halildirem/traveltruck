import styles from './Container.module.css';

const Container = ({ children, className = '' }) => (
  <div className={`${styles.container} ${className}`}>{children}</div>
);

export default Container;
