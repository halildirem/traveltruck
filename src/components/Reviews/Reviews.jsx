import Rating from '../Rating/Rating';
import styles from './Reviews.module.css';

const Reviews = ({ reviews = [] }) => (
  <div className={styles.wrapper}>
    <h2 className={styles.heading}>Reviews</h2>
    {reviews.length === 0 ? (
      <p className={styles.empty}>This camper has no reviews yet.</p>
    ) : (
      <ul className={styles.list}>
        {reviews.map((review, index) => (
          <li key={`${review.reviewer_name}-${index}`} className={styles.item}>
            <div className={styles.top}>
              <span className={styles.avatar}>
                {review.reviewer_name?.charAt(0).toUpperCase()}
              </span>
              <div>
                <p className={styles.name}>{review.reviewer_name}</p>
                <Rating value={review.reviewer_rating} />
              </div>
            </div>
            <p className={styles.comment}>{review.comment}</p>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default Reviews;
