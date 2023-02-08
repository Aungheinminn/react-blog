import React from 'react'
import { Link } from 'react-router-dom'
import classes from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import clsx from 'clsx'
const NavBar = () => {
  const [div, setDiv] = useState(false)

  const divv = clsx(classes.div, {
    [classes.divAppear]: div
  })

  let email = localStorage.getItem('email')
  let result = JSON.parse(email)
  // email.replace(/['"]/g, '')
  const password = localStorage.getItem('password')
  const handleDelete = () => {
    console.log(email, password)
    localStorage.clear()
  }

  return (
    <div className={classes.container}>
      <div className={divv}>
        <p className={classes.p}>{result}</p>
        <Link to={'/'} className={classes.btn} onClick={handleDelete}>
          <FontAwesomeIcon className={classes.fas} icon={faTrash} />
        </Link>
        <div className={classes.xmarkDiv}>
          <FontAwesomeIcon
            className={classes.xmark}
            icon={faXmark}
            onClick={() => setDiv(!div)}
          />
        </div>
      </div>
      <div className={classes.barDiv}>
        <FontAwesomeIcon
          className={classes.bar}
          icon={faBars}
          onClick={() => setDiv(!div)}
        />
      </div>
    </div>
  )
}
export default NavBar
