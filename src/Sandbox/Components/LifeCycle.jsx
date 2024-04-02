import React, { useEffect } from 'react'

export default function LifeCycle() {
    useEffect(()=>{
        console.log("has amount");
        return ()=>{
            console.log("has unamount");
        }
    },[]

    )
  return (
    <div>LifeCycle</div>
  )
}
