import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Home from './Home'


const PrivateRoute = ({user}) => {
  return (
    <div>
      {user ? <Home/> : <Outlet/> }
    </div>
  )
}

export default PrivateRoute
