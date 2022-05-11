import { useState, useEffect } from 'react';

export default function useLocalStorage(key) {
  const [state, setState] = useState(
    () => JSON.parse(localStorage.getItem(key)) ?? ''
  );

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
