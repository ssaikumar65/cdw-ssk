import { useEffect, useState } from "react";
const DELAY = 600;
const useDebounce = (value: string) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, DELAY);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, DELAY]);

  return debouncedValue;
};
export default useDebounce;
