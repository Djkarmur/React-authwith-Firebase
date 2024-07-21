import React from 'react'

import { Outlet } from 'react-router-dom'
import SignUp from '../SignUp.jsx'

const Layout = () => {
  return (
    <div>
      
      <Outlet/>
     
    </div>
  )
}

export default Layout
