import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import styles from './SharedLayout.module.css';

const SharedLayout = () => (
  <>
    <Header />
    <main className={styles.main}>
      <Suspense
        fallback={
          <div className={styles.fallback}>
            <Loader />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </main>
  </>
);

export default SharedLayout;
