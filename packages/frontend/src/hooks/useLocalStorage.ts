import { useState } from "react";
import { StorageKeys } from "src/enums/storageKeys.enum";

export function useLocalStorage<T>(
  key: StorageKeys,
  initialValue?: T,
): [T, (key: StorageKeys, value: T) => void] {
  const readValue = () => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState<T>(readValue);

  const setValue = (newKey: StorageKeys, value: T) => {
    try {
      window.localStorage.setItem(newKey, JSON.stringify(value));
      setStoredValue(value);
    } catch (error) {
      console.warn(`Error setting localStorage key “${newKey}”:`, error);
    }
  };

  return [storedValue, setValue];
}
