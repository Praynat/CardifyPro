import React from 'react'
import {useData} from "./DataProvider"

export default function GrandChildComponent() {
    const context =useData();
  return (
    <div>GrandChildComponent data1={context.data1}</div>
  )
}
