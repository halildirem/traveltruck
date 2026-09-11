import { useState } from 'react';
import styles from './Gallery.module.css';

const Gallery = ({ images = [], name }) => {
  const [active, setActive] = useState(0);

  if (images.length === 0) return null;

  const current = images[active] ?? images[0];

  return (
    <div className={styles.gallery}>
      <div className={styles.main}>
        <img src={current.original} alt={name} />
      </div>
      {images.length > 1 && (
        <ul className={styles.thumbs}>
          {images.map((image, index) => (
            <li key={image.thumb ?? index}>
              <button
                type="button"
                className={`${styles.thumb} ${
                  index === active ? styles.thumbActive : ''
                }`}
                onClick={() => setActive(index)}
                aria-label={`Show photo ${index + 1}`}
              >
                <img src={image.thumb} alt={`${name} photo ${index + 1}`} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Gallery;
