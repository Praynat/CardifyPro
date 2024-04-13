import { useState, useCallback, useMemo } from "react";

export default function useCounter(initialValue = 0, initialSkip = 1) {
  const [counter, setCounter] = useState(initialValue);

  const increment = useCallback(() => {
    setCounter((prev) => prev + initialSkip);
  }, [initialSkip]);

  const decrement = useCallback(() => {
    setCounter((prev) => prev - initialSkip);
  }, [initialSkip]);

  const reset = useCallback(() => {
    setCounter(initialValue);
  }, [initialValue]);

  return useMemo(
    () => ({ counter, increment, decrement, reset }),
    [counter, increment, decrement, reset]
  );
}
