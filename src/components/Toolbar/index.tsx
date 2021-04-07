import React from 'react'
import Navbar from './Navbar'

import './style.scss'

const Toolbar: React.FC = (): JSX.Element => {
  return (
    <nav className="toolbar">
      <div className="nav-wrapper">
        <Navbar />
      </div>
    </nav>
  )
}

export default Toolbar
