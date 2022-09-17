import { Grid } from '@mui/material';
import { useRouter } from 'next/router';

import useUser from '../../hooks/use-user';

export default function UserDetails() {
const router = useRouter();
const { data, error, loading } = useUser(String(router.query.username || ''));

return (
<>
  <div className='grid_main'>
    <div className="img_bxx">
      <img src={data?.avatar_url} alt='' />
      <h3>{data?.name}</h3>
      <p>{data?.login}</p>
    </div>
    <div className='right_bxx'>
      {data?.repos.map((repo: any) => {
      return(<div className='right_main'>
        <a href={repo.html_url} target="_blank">
          <div className='inr_txt'>
            <h2>{repo.full_name.split("/")[1]}</h2>
            <span>{repo.private ? 'Private':'Public'}</span>
          </div>
          {/* <label>Return Theme</label> */}
          <label>Description</label>
          <h4>{repo.description}</h4>
          <label>Last Updated</label>
          <h4>{new Date(repo.updated_at).toDateString() +' '+ new Date(repo.updated_at).toLocaleTimeString()}</h4>
          <label>Created Date</label>
          <h4>{new Date(repo.created_at).toDateString() +' '+ new Date(repo.created_at).toLocaleTimeString()}</h4>
          <label>Forks</label>
          <h4>{repo.forks}</h4>
        </a>
      </div>)})}



    </div>

  </div>


  <div>
    {loading && 'Loading...'}
    
    {error  && error}
    
  </div>
</>

);
}