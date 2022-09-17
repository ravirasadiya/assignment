import { useRouter } from 'next/router';

import useUser from '../../hooks/use-user';

export default function UserDetails() {
  const router = useRouter();
  const { data, error, loading } = useUser(String(router.query.username || ''));

  return (
    <>
     <div className='grid_main'>
        <div className="img_bxx">
          <img src='./img/tree.jpeg' alt='' />
            <h3>ASHVIN UPADALA</h3>
            <p>ashvinupadala</p>
        </div>
        <div className='right_bxx'>
          <div className='right_main'>
            <div className='inr_txt'>
              <h2>Your activity</h2>
              <span>Show</span>
            </div>
            <div>
              Return Theme
            </div>
          </div>
         <div className='right_main'>
            <div className='inr_txt'>
              <h2>Your activity</h2>
              <span>Show</span>
            </div>
            <div>
              Return Theme
            </div>
         </div>
         <div className='right_main'>
            <div className='inr_txt'>
              <h2>Your activity</h2>
              <span>Show</span>
            </div>
            <div>
              Return Theme
            </div>
          </div>
         <div className='right_main'>
            <div className='inr_txt'>
              <h2>Your activity</h2>
              <span>Show</span>
            </div>
            <div>
              Return Theme
            </div>
         </div>
          <div className='right_main'>
            <div className='inr_txt'>
              <h2>Your activity</h2>
              <span>Show</span>
            </div>
            <div>
              Return Theme
            </div>
         </div>
         <div className='right_main'>
            <div className='inr_txt'>
              <h2>Your activity</h2>
              <span>Show</span>
            </div>
            <div>
              Return Theme
            </div>
         </div>
          <div className='right_main'>
            <div className='inr_txt'>
              <h2>Your activity</h2>
              <span>Show</span>
            </div>
            <div>
              Return Theme
            </div>
         </div>
        </div>

      </div>


      <div>
     {loading && 'Loading...'}
     {!loading &&
       !error &&
       Object.entries(data || {}).map(([key, value]) => (
         <div key={key}>
           <b style={{ minWidth: 200, display: 'inline-block' }}>{key}</b>
           <span>{JSON.stringify(value)}</span>
         </div>
       ))}
     {error}
   </div>
    </>
   
  );
}
