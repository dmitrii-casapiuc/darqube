import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {updateSearchAction} from 'store/actions/appActions'
import {RootState} from 'store/reducers/rootReducer'

import './style.scss'

const Search: React.FC = (): JSX.Element => {
  const {search} = useSelector((state: RootState) => state.appState)
  const dispatch = useDispatch()

  return (
    <form className="search-form">
      <div className="input-field">
        <input 
          id="search"
          type="search"
          placeholder="Search"
          value={search}
          autoComplete="off"
          onChange={event => dispatch(updateSearchAction(event.target.value))}
        />
        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
      </div>
    </form>
  )
}

export default Search
