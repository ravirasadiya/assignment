import { useEffect, useState } from 'react';

import type { UserModel } from '../utils/fetch-user-data';
import fetchUserData from '../utils/fetch-user-data';
import useSearchHistory from './use-search-history';

export default function useUser(username: string) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<UserModel>();
  const [error, setError] = useState<string>();
  const { pushToHistory } = useSearchHistory();

  useEffect(() => {
    const status = { cancelled: false };
    if (username) {
      setLoading(true);
      setError(undefined);
      fetchUserData(username)
        .then((res) => {
          if (!status.cancelled) {
            setData(res);
          }
        })
        .catch((err) => {
          if (!status.cancelled) {
            setError(err.message);
          }
        })
        .finally(() => {
          if (!status.cancelled) {
            setLoading(false);
            pushToHistory(username);
          }
        });
    }

    return () => {
      status.cancelled = true;
    };
  }, [pushToHistory, username]);

  return {
    loading,
    data,
    error,
  };
}
