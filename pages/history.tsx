import type { NextPage } from 'next';
import Link from 'next/link';

import useSearchHistory from '../hooks/use-search-history';
import styles from '../styles/History.module.scss';

const History: NextPage = () => {
  const { history, clear } = useSearchHistory();
  return (
    <div className={styles.Container}>
      <h1>Search History</h1>
      {(history || []).map((item, index) => (
        <div key={index}>
          <Link href={`/search?username=${item}`}>
            <a className={styles.Links}>{item}</a>
          </Link>
        </div>
      ))}
      <div>
        <button onClick={clear}>Clean</button>
      </div>
    </div>
  );
};

export default History;
