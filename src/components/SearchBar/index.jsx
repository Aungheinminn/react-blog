import React from 'react'
import { Link } from 'react-router-dom'
import classes from './style.module.css'

const SearchBar = ({ value, handleSearch, clearSearch, formSubmit }) => {
  return (
    <div className={classes.container}>
      <div className={classes.inner}>
        <form action="" onSubmit={formSubmit}>
          <input
            type="text"
            onChange={handleSearch}
            // onChange={handleReset}
            placeholder="Search By Category"
            value={value}
            className={classes.input}
          />

          {value && (
            <span className={classes.spn} onClick={clearSearch}>
              x
            </span>
          )}

          {/* <button className={classes.btn}>Go</button> */}
        </form>
      </div>
      <Link className={classes.icon} to={'/add'}>
        +
      </Link>
    </div>
  )
}

export default SearchBar
