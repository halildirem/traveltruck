import { useSelector } from 'react-redux';
import CamperCard from '../CamperCard/CamperCard';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import {
  selectCampers,
  selectHasMore,
  selectIsLoadingMore,
} from '../../redux/campers/selectors';
import styles from './CamperList.module.css';

const CamperList = ({ onLoadMore }) => {
  const campers = useSelector(selectCampers);
  const hasMore = useSelector(selectHasMore);
  const isLoadingMore = useSelector(selectIsLoadingMore);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {campers.map((camper) => (
          <li key={camper.id}>
            <CamperCard camper={camper} />
          </li>
        ))}
      </ul>

      {hasMore && (
        <div className={styles.more}>
          <Button
            variant="secondary"
            onClick={onLoadMore}
            disabled={isLoadingMore}
          >
            {isLoadingMore ? <Loader size={20} /> : 'Load more'}
          </Button>
        </div>
      )}
    </div>
  );
};

export default CamperList;
