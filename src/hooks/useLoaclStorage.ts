import { useState } from 'react';

export const useLocalStorage = (key: string, initialValue: number) => {
  const [value, setValue] = useState(() => {
    try {
      return JSON.parse(`${localStorage.getItem(key)}`) || initialValue;
    } catch {
      return initialValue;
    }
  });

  const save = (newValue: number) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, save];
};
