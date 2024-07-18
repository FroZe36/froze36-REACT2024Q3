import { useEffect, useState } from 'react';

export function useLocalStorage(
  initial?: string | null
): [string, (arg: string) => void] {
  const [value, setValue] = useState(
    initial ?? localStorage.getItem('savedResult') ?? ''
  );

  useEffect(() => {
    localStorage.setItem('savedResult', value);
  }, [value, setValue]);

  return [value, setValue];
}
