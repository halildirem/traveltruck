import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../components/Container/Container';
import Loader from '../../components/Loader/Loader';
import Gallery from '../../components/Gallery/Gallery';
import CamperMeta from '../../components/CamperMeta/CamperMeta';
import VehicleDetails from '../../components/VehicleDetails/VehicleDetails';
import Reviews from '../../components/Reviews/Reviews';
import BookingForm from '../../components/BookingForm/BookingForm';
import { fetchCamperById } from '../../redux/campers/operations';
import { clearCurrent } from '../../redux/campers/slice';
import {
  selectCurrentCamper,
  selectCurrentLoading,
  selectCurrentError,
} from '../../redux/campers/selectors';
import { formatPrice } from '../../utils/format';
import styles from './CamperDetailsPage.module.css';

const CamperDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectCurrentCamper);
  const isLoading = useSelector(selectCurrentLoading);
  const error = useSelector(selectCurrentError);

  useEffect(() => {
    dispatch(fetchCamperById(id));
    return () => dispatch(clearCurrent());
  }, [dispatch, id]);

  if (isLoading) {
    return (
      <div className={styles.state}>
        <Loader />
      </div>
    );
  }

  if (error || !camper) {
    return (
      <div className={styles.state}>
        <p className={styles.error}>We couldn&apos;t load this camper.</p>
        <Link to="/catalog" className={styles.back}>
          Back to catalog
        </Link>
      </div>
    );
  }

  const reviewsCount = camper.reviews?.length ?? 0;

  return (
    <Container className={styles.page}>
      <div className={styles.top}>
        <div className={styles.gallery}>
          <Gallery images={camper.gallery} name={camper.name} />
        </div>

        <div className={styles.info}>
          <section className={styles.summary}>
            <h1 className={styles.name}>{camper.name}</h1>
            <CamperMeta
              rating={camper.rating}
              reviewsCount={reviewsCount}
              location={camper.location}
            />
            <p className={styles.price}>{formatPrice(camper.price)}</p>
            <p className={styles.description}>{camper.description}</p>
          </section>

          <VehicleDetails camper={camper} />
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.reviews}>
          <Reviews reviews={camper.reviews} />
        </div>
        <div className={styles.booking}>
          <BookingForm camperName={camper.name} />
        </div>
      </div>
    </Container>
  );
};

export default CamperDetailsPage;
