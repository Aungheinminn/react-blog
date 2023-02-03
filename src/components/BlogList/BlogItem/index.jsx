import React from 'react'
import CategoryBadge from '../CategoryBadge'
import classes from './style.module.css'
// import { blogList } from "../../../config/data";
import { Link } from 'react-router-dom'

const BlogItem = ({
  blog: { user, id, title, paragraph, category, photo, created_at }
}) => {
  return (
    <div className={classes.container}>
      <img className={classes.imgCover} src={photo} alt="cover" />
      <CategoryBadge label={category} />
      <h3 className={classes.title}>{title}</h3>
      <p className={classes.description}>{paragraph}</p>

      <footer>
        <div className={classes.author}>
          <img
            className={classes.authorAvatar}
            src={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMIee3IzbiO_J9HxIWdzUTff0B2dn3noYOj3g6pIZsuw&s'
            }
            alt="authorAvatar"
          />
          <div>
            <h6 className={classes.authorName}>{user}</h6>
            <p className={classes.createdAt}>{created_at}</p>
          </div>
        </div>
        <Link className={classes.link} to={`/blog/${id}`}>
          Detail
        </Link>
      </footer>
    </div>
  )
}
export default BlogItem
