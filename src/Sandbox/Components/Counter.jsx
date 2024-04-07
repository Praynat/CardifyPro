import { Box, Button, Typography } from '@mui/material';
import React, { useEffect} from 'react'
import useCounter from '../Hooks/useCounter';

export default function Counter() {

    const {counter, increment, decrement,reset} =useCounter(0,1)
      useEffect(()=>{
        if (counter===8) {
            
            console.log("boom");
        }
    },[counter]

    )
  return (
    <Box sx={{display:"flex", flexDirection:"column", alignItems:"center", gap:"1rem"  }}>
        <Box sx={{display:"flex", gap:"1rem"}}>
            <Button variant='contained' onClick={increment}>+</Button>
            <Button variant='contained' onClick={decrement}>-</Button>
        </Box>
        <Typography variant='h3'>{counter}</Typography>
        <Button onClick={reset}>Reset</Button>
    </Box>
  )
}