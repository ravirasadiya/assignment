import type { NextPage } from 'next';
import Link from 'next/link';

import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.Container}>
      <Link href="/search">
        <a className={styles.Links}>Search</a>
      </Link>
      <Link href="/history">
        <a className={styles.Links}>History</a>
      </Link>
    </div>
  );
};

export default Home;
