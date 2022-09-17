import { useCallback } from 'react';

import useLocalStorage from './use-local-storage';

const DEFAULT_ARR: string[] = [];
export default function useSearchHistory() {
  const { value: history, setValue: setHistory } = useLocalStorage<string[]>(
    'history',
    DEFAULT_ARR
  );

  const pushToHistory = useCallback(
    (username: string) => {
      const prev = history;
      if (prev.length === 0 || prev[0] !== username) {
        setHistory([username, ...prev]);
      }
    },
    [history, setHistory]
  );

  const clear = () => setHistory([]);

  return {
    history,
    pushToHistory,
    clear,
  };
}
