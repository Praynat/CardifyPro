import { useState } from "react";

export default function useCounter(initialValue=0, initialSkip=1) {

  
    const[counter,setCounter] = useState(initialValue, initialSkip);
    const increment = () => {
        setCounter((prev) => prev + initialSkip);
      };
      const decrement = () => {
        setCounter((prev) => prev - initialSkip);
      };
      const reset =() => {
        setCounter(initialValue)
      }
  return {counter, increment, decrement,reset};
}
