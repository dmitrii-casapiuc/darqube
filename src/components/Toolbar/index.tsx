import React from 'react'
import Navbar from './Navbar'
import Search from './Search'

import './style.scss'

const Toolbar: React.FC = (): JSX.Element => {
  return (
    <nav className="toolbar">
      <div className="nav-wrapper">
        <Navbar />
        <Search />
      </div>
    </nav>
  )
}

export default Toolbar
