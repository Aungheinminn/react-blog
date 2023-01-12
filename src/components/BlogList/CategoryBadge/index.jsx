import React from 'react'
import classes from './style.module.css'

const CategoryBadge = ({ label }) => {
  return <span className={classes.spn}>{label}</span>
}

export default CategoryBadge
