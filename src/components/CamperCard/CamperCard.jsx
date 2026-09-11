import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import FeaturesList from '../FeaturesList/FeaturesList';
import CamperMeta from '../CamperMeta/CamperMeta';
import { toggleFavorite } from '../../redux/favorites/slice';
import { selectIsFavorite } from '../../redux/favorites/selectors';
import { formatPrice } from '../../utils/format';
import { getCardFeatures } from '../../utils/camperFeatures';
import styles from './CamperCard.module.css';

const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector(selectIsFavorite(camper.id));
  const reviewsCount = camper.reviews?.length ?? 0;

  return (
    <article className={styles.card}>
      <div className={styles.thumb}>
        <img
          src={camper.gallery?.[0]?.thumb}
          alt={camper.name}
          loading="lazy"
        />
      </div>

      <div className={styles.body}>
        <header className={styles.header}>
          <h3 className={styles.name}>{camper.name}</h3>
          <div className={styles.priceRow}>
            <span className={styles.price}>{formatPrice(camper.price)}</span>
            <button
              type="button"
              className={styles.favorite}
              onClick={() => dispatch(toggleFavorite(camper.id))}
              aria-pressed={isFavorite}
              aria-label={
                isFavorite ? 'Remove from favorites' : 'Add to favorites'
              }
            >
              <Icon
                name={isFavorite ? 'heartFilled' : 'heart'}
                size={24}
                className={isFavorite ? styles.favoriteActive : undefined}
              />
            </button>
          </div>
        </header>

        <CamperMeta
          rating={camper.rating}
          reviewsCount={reviewsCount}
          location={camper.location}
        />

        <p className={styles.description}>
          {camper.description}
        </p>

        <FeaturesList items={getCardFeatures(camper)} className={styles.features} />

        <Button
          as="a"
          variant="showMore"
          href={`/catalog/${camper.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.showMore}
        >
          Show more
        </Button>
      </div>
    </article>
  );
};

export default CamperCard;
