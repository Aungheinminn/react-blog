import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import EmptyList from '../../components/BlogList/EmptyList'
// import { blogList } from '../../config/data'
import classes from './style.module.css'

const BlogPage = () => {
  const [datas, setData] = useState([])
  const getApi = async () => {
    const res = await fetch('http://localhost:8000/api/article')
    const datas = await res.json()
    setData(datas)
  }
  useEffect(() => {
    getApi()
  }, [])
  const { id } = useParams()
  let blog = datas.find((blog) => blog.id === parseInt(id)) ?? null

  return (
    <div className={classes.main}>
      <div>
        <Link to="/" className={classes.link}>
          Go Back
        </Link>
      </div>
      {blog ? (
        <div className={classes.blogContainer}>
          <div className={classes.inner}>
            <h1 className={classes.title}>{blog.title}</h1>
            <div className={classes.badges}>
              <p className={classes.category}>{blog.category}</p>
              {/* {blog.subCategory.map((item) => {
                return <p className={classes.subCategory}>{item}</p>
              })} */}
            </div>
            <div>
              <img src={blog.photo} alt="cover" className={classes.cover} />
            </div>
            <div className={classes.content}>
              <p>{blog.paragraph}</p>
            </div>
            <footer className={classes.footer}>
              <div className={classes.authorDiv}>
                <img
                  className={classes.avatar}
                  src={
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMIee3IzbiO_J9HxIWdzUTff0B2dn3noYOj3g6pIZsuw&s'
                  }
                  alt="authorAvatar"
                />
                <p>{blog.user}</p>
              </div>

              <b>{blog.created_at}</b>
            </footer>
          </div>
        </div>
      ) : (
        <EmptyList />
      )}
    </div>
  )
}

export default BlogPage
