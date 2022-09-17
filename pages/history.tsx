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
        <div className="">
          <table className='table'>
          <thead>
              <tr>
                  <th></th>
                  <th>#</th>
                  <th>Name</th>
                  <th>Last Price</th>
                  <th>24h %</th>
                  <th>Market Cap</th>
                  <th>Last 7 Days</th>
                  <th></th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <th></th>
                  <td>1</td>
                  <td>
                      <a>
                          <span className="icon-btc icon_tble"><span className="path1"></span><span className="path2"></span></span>   
                          <span className='btcin_onl'>Bitcoin</span>
                          <span className="unit">BTC</span>
                      </a>
                  </td>
                  <td className='boild'>$56,623.54</td>
                  <td className="up">+1.45%</td>
                  <td className="boild">$880,423,640,582</td>
                  <td>
                  <a href="#" className="btn">Trade</a>
                  </td>
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
