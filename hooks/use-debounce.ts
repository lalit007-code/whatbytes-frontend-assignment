import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay: number): T {
  const [debounceValue, setdebounceValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setdebounceValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounceValue;
}
