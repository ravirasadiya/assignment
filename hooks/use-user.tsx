import axios from 'axios';
import { useEffect, useState } from 'react';

import type { UserModel } from '../models/UserModel';
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
        .then(async (res) => {
          if (!status.cancelled) {
            const repoRes = await axios.get(res.repos_url);
            res.repos = repoRes.data;
            setData(res);
            pushToHistory(res);
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
