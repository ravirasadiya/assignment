import { useRouter } from 'next/router';

import useUser from '../../hooks/use-user';

export default function UserDetails() {
  const router = useRouter();
  const { data, error, loading } = useUser(String(router.query.username || ''));

  return (
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
  );
}
