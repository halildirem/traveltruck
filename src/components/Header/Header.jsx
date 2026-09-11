import { NavLink } from 'react-router-dom';
import Container from '../Container/Container';
import styles from './Header.module.css';

const navClass = ({ isActive }) =>
  isActive ? `${styles.link} ${styles.active}` : styles.link;

const Header = () => (
  <header className={styles.header}>
    <Container className={styles.inner}>
      <NavLink to="/" className={styles.logo}>
        Travel<span>Trucks</span>
      </NavLink>
      <nav className={styles.nav}>
        <NavLink to="/" className={navClass} end>
          Home
        </NavLink>
        <NavLink to="/catalog" className={navClass}>
          Catalog
        </NavLink>
      </nav>
    </Container>
  </header>
);

export default Header;
