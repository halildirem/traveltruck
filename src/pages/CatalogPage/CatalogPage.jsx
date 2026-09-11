import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../components/Container/Container';
import Filters from '../../components/Filters/Filters';
import CamperList from '../../components/CamperList/CamperList';
import EmptyState from '../../components/EmptyState/EmptyState';
import LoadingOverlay from '../../components/LoadingOverlay/LoadingOverlay';
import { fetchCampers, fetchMoreCampers } from '../../redux/campers/operations';
import {
  selectCampers,
  selectIsLoading,
  selectError,
} from '../../redux/campers/selectors';
import styles from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <Container className={styles.page}>
      <h1 className="visually-hidden">Camper catalog</h1>
      <Filters />

      <section className={styles.results}>
        {isLoading && <LoadingOverlay />}

        {error && !isLoading && (
          <p className={styles.error}>
            Something went wrong while loading campers. Please try again later.
          </p>
        )}

        {!isLoading && !error && campers.length === 0 && <EmptyState />}

        {campers.length > 0 && (
          <CamperList onLoadMore={() => dispatch(fetchMoreCampers())} />
        )}
      </section>
    </Container>
  );
};

export default CatalogPage;
