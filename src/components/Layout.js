import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar, Footer, Sidebar } from '../components'
const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Layout
