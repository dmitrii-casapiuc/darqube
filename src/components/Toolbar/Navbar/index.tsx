import React from 'react'
import {NavLink} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

import {RootState} from 'store/reducers/rootReducer'
import {updateSearchAction} from 'store/actions/appActions'

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
  const {search} = useSelector((state: RootState) => state.appState)
  const dispatch = useDispatch()

  const handleClick = () => {
    if (search) dispatch(updateSearchAction(''))
  }

  return (
    <ul className="navbar">
      {
        menu.map((item: IMenu): JSX.Element => <li key={item.id}>
          <NavLink
            exact
            to={item.to}
            onClick={() => handleClick()}
          >
            {item.title}
          </NavLink>
        </li>)
      }
    </ul>
  )
}

export default Navbar
