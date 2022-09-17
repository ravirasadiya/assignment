import { useEffect, useState } from 'react';

export default function useLocalStorage<T>(key: string, defaultValue: T) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const strValue = localStorage.getItem(key) || '';
    setValue((strValue && JSON.parse(strValue)) || defaultValue);
  }, [defaultValue, key]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return { value, setValue };
}
