import { useEffect } from 'react';
import {useState} from 'react';

export default function useWindowSize() {

  const[windowWidth,setWindowWidth]=useState(window.innerWidth);
  const[windowHeight,setWindowHeight]=useState(window.innerHeight)

  useEffect(()=>{
    function handleresize() {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight)
    }
    window.addEventListener('resize', handleresize);

  return()=>{
    window.removeEventListener('resize', handleresize);
  };
},[]
  );
  return{windowWidth,windowHeight};
}
