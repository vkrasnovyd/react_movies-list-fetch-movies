import { useState } from 'react';

export function useLocalStorage<T>(
  key: string,
  defaultValue: T,
): [T, (newValue: T) => void] {
  const [value, setValue] = useState(() => {
    const savedValue = localStorage.getItem(key);

    if (savedValue === null) {
      return defaultValue;
    }

    try {
      return JSON.parse(savedValue);
    } catch (error) {
      return defaultValue;
    }
  });

  function saveValue(newValue: T) {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  }

  return [value, saveValue] as const;
}
