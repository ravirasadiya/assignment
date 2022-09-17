import { useCallback } from 'react';

import type { UserModel } from '../models/UserModel';
import useLocalStorage from './use-local-storage';

const DEFAULT_ARR: ISearchHistory[] = [];

interface ISearchHistory {
  username: string;
  avtar: string;
  timestamp: number;
}

export default function useSearchHistory() {
  const { value: history, setValue: setHistory } = useLocalStorage<
    ISearchHistory[]
  >('search_history', DEFAULT_ARR);

  const pushToHistory = useCallback(
    (user: UserModel) => {
      setHistory((prev) => {
        if (
          prev.length > 0 &&
          prev[0].username.toLowerCase() === user.login.toLowerCase()
        ) {
          return prev;
        }

        const updatedHistory = (prev || []).filter(
          (entry) => entry.username.toLowerCase() !== user.login.toLowerCase()
        );
        return [
          {
            username: user.login,
            avtar: user.avatar_url,
            timestamp: Date.now(),
          },
          ...updatedHistory,
        ];
      });
    },
    [setHistory]
  );

  const clear = () => setHistory([]);

  return {
    history,
    pushToHistory,
    clear,
  };
}
