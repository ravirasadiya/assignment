import type { NextPage } from 'next';

import Form from '../components/Search/form';
import UserDetails from '../components/Search/UserDetails';
import styles from '../styles/Search.module.scss';

const Search: NextPage = () => {
  return (
    <div className={styles.Search}>
      <Form />
      <UserDetails />
    </div>
  );
};

export default Search;
