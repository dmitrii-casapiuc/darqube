import React from 'react'
import './style.scss'

const Search: React.FC = (): JSX.Element => {
  return (
    <form className="search-form">
      <div className="input-field">
        <input id="search" type="search" />
        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
      </div>
    </form>
  )
}

export default Search
