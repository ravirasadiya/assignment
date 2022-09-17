import { useCallback, useEffect, useState } from 'react';

export default function useLocalStorage<T>(key: string, defaultValue: T) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const strValue = localStorage.getItem(key) || '';
    setValue((strValue && JSON.parse(strValue)) || defaultValue);
  }, [defaultValue, key]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  const updateValue = useCallback(
    (newVal: T) => {
      const strVal = JSON.stringify(newVal);
      localStorage.setItem(key, strVal);
      setValue(newVal);
    },
    [key]
  );

  return { value, setValue: updateValue };
}
