import React from 'react'
import { NavLink } from 'react-router-dom'

import './style.scss'

interface IMenu {
  id: number
  to: string
  title: string
}

const menu: IMenu[] = [
  {
    id: 1,
    to: '/',
    title: 'News'
  },
  {
    id: 2,
    to: '/bookmarks',
    title: 'Bookmarks'
  },
]

const Navbar: React.FC = (): JSX.Element => {
  return (
    <ul className="navbar">
      {
        menu.map((item: IMenu): JSX.Element => <li key={item.id}><NavLink exact to={item.to}>{item.title}</NavLink></li>)
      }
    </ul>
  )
}

export default Navbar
