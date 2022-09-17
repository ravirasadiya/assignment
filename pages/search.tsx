import type { NextPage } from 'next';

import Form from '../components/Search/form';
import UserDetails from '../components/Search/UserDetails';
import styles from '../styles/Search.module.scss';

const Search: NextPage = () => {
  return (
    <div className={styles.Search}>
      <div className='inpt_form cstm_cntnr'>
        <Form />
        <UserDetails />
      </div>
      
    </div>
  );
};

export default Search;
