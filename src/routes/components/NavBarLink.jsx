import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBarLink({to,children,sx}) {
  return (
    <>
    <Link to={to} 
      onClick= {() => window.scrollTo(0, 0)}
      style={{ textdecoration:"none" ,...sx={sx}}}>
    {children}
    </Link>
    </>
  )
}
