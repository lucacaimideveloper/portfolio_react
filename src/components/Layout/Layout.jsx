import React from 'react'
import SideBar from '../SideBar.jsx/SideBar'
import './layoutStyle.scss'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <div className="App">
        <SideBar />
        <div className="page">
          <span className="tags top-tags">&lt;body&gt;</span>
          <Outlet />
          <span className="tags bottom-tags">
            &lt;/body&gt;
            <br />
            <span className="bottom-tag-html">&lt;/html&gt;</span>
          </span>
        </div>
      </div>
    </>
  )
}

export default Layout
