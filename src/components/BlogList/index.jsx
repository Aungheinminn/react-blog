import React from 'react'
import BlogItem from './BlogItem'
import classes from './style.module.css'

const BlogList = ({ blogs }) => {
  return (
    <div className={classes.container}>
      {blogs.map((blog) => (
        <BlogItem blog={blog} key={blog.id} />
      ))}
    </div>
  )
}
export default BlogList
