import type { NextPage } from 'next';
import Link from 'next/link';

import useSearchHistory from '../hooks/use-search-history';
import styles from '../styles/History.module.scss';

const History: NextPage = () => {
  const { history, clear } = useSearchHistory();
  return (
    <>
      <div className={styles.Container}>
        <div className="table_main cstm_cntnr">
          <h1>Search History</h1>
          <div className='forscroll'>
            <table className='table'>
              <thead>
                  <tr>
                      <th>Number</th>
                      <th>Name</th>
                      <th>FirstName</th>
                      <th>Last name</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>1</td>
                      <td>1545</td>
                      <td>88</td>
                      <td><button>Show All</button></td>
                  </tr>
                  <tr>
                      <td>2</td>
                      <td>1545</td>
                      <td>765</td>
                      <td><button>Show All</button></td>
                  </tr>
                  <tr>
                      <td>3</td>
                      <td>1545</td>
                      <td>765</td>
                      <td><button>Show All</button></td>
                  </tr>
                  <tr>
                      <td>4</td>
                      <td>1545</td>
                      <td>765</td>
                      <td><button>Show All</button></td>
                  </tr>
                  <tr>
                      <td>5</td>
                      <td>1545</td>
                      <td>765</td>
                      <td><button>Show All</button></td>
                  </tr>
                </tbody>
            </table>
          </div>
        </div>
    



      {/* {(history || []).map((item, index) => (
        <div key={index}>
          <Link href={`/search?username=${item.username}`}>
            <a className={styles.Links}>
              {item.username} {new Date(item.timestamp).toLocaleString()}
            </a>
          </Link>
        </div>
      ))} */}
      <div>
        <button onClick={clear}>Clean</button>
      </div>
    </div>
    </>
   
  );
};

export default History;
