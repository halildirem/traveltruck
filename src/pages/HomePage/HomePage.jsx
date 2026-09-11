import { useNavigate } from 'react-router-dom';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import styles from './HomePage.module.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.hero}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Campers of your dreams</h1>
          <p className={styles.subtitle}>
            You can find everything you want in our catalog
          </p>
          <Button
            className={styles.cta}
            onClick={() => navigate('/catalog')}
          >
            View Now
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default HomePage;
