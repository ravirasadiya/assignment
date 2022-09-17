import type { NextPage } from 'next';
import Link from 'next/link';
import { DataGrid, GridApi, GridCellValue, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import useSearchHistory from '../hooks/use-search-history';
import styles from '../styles/History.module.scss';
import { Button } from '@mui/material';

const History: NextPage = () => {
const { history, clear } = useSearchHistory();
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
{ field: 'searchname', headerName: 'Search name', width: 130,sortable: false },
{ field: 'searchtime', headerName: 'Search Time', width: 200,sortable: false},
{
  field: 'action',
  headerName: '',
  sortable: false,
  width: 200,
  renderCell: (params) => {
    return <Link href={`/?username=${params.row.searchname}`}  ><Button variant="contained">Go to Profile</Button></Link>;
  },
},

];

const rows:any = [];

history.map((historyDetails,index) => {
  rows.push( { 'id':index+1,'searchname': historyDetails.username, 'searchtime': new Date(historyDetails.timestamp).toLocaleString() })
})


return (
<>
  <div className={styles.Container}>
    <div className="table_main cstm_cntnr">
      <h1>Search History</h1>
      <div>
      <Button variant="outlined" color="error" onClick={clear}>Clean History</Button>
      </div>
      <div className='forscroll'>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} />
        </div>
      </div>
    </div>




    {/* {(history || []).map((item, index) => (
    <div key={index}>
      <Link href={`/search?username=${item.username}`}> <a className={styles.Links}>
      {item.username} {new Date(item.timestamp).toLocaleString()}
      </a>
      </Link>
    </div>
    ))} */}
    
  </div>
</>

);
};

export default History;