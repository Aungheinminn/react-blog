import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import EmptyList from '../../components/BlogList/EmptyList'
// import { blogList } from '../../config/data'
import classes from './style.module.css'
import { getApi } from '../../config/apiData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx'

const BlogPage = () => {
  const [datas, setData] = useState([])
  const { id } = useParams()
  const [btn, setBtn] = useState(false)
  const btnn = clsx(classes.btns, {
    [classes.btnsAppear]: btn
  })
  // const { delId} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getApi()
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])
  let blog = datas.find((blog) => blog.id === parseInt(id)) ?? null

  const handleDelete = () => {
    // const url = 'http://localhost/api/article/' + id;
    fetch('http://localhost:8000/api/article/' + id, {
      method: 'DELETE'
    })
    // console.log(url)
    navigate('/home')
    getApi()
  }
  // useEffect(()=>{
  //   handleDelete()
  // },[])

  return (
    <div className={classes.main}>
      <div className={classes.bar}>
        <FontAwesomeIcon
          className={classes.faBar}
          icon={faBars}
          onClick={() => setBtn(!btn)}
        />
      </div>
      <div className={btnn}>
        <Link to="/home" className={classes.link}>
          Go Back
        </Link>
        <button className={classes.btn} onClick={handleDelete}>
          Delete
        </button>
        <Link to={`/edit/${id}`} className={classes.btn}>
          Edit
        </Link>
        <div className={classes.xmarkDiv}>
          <FontAwesomeIcon
            className={classes.xmark}
            icon={faXmark}
            onClick={() => setBtn(!btn)}
          />
        </div>
      </div>
      {blog ? (
        <div className={classes.blogContainer}>
          <div className={classes.inner}>
            <div className={classes.wordBreak}>
              <h1 className={classes.title}>{blog.title}</h1>
            </div>

            <div className={classes.badges}>
              <p className={classes.category}>{blog.category}</p>
              {/* {blog.subCategory.map((item) => {
                return <p className={classes.subCategory}>{item}</p>
              })} */}
            </div>
            <div className={classes.coverDiv}>
              <img src={blog.photo} alt="cover" className={classes.cover} />
            </div>
            <div className={classes.content}>
              <p>{blog.paragraph}</p>
            </div>
            <footer className={classes.footer}>
              <div className={classes.authorDiv}>
                <p>{blog.user}</p>
              </div>
              <div className={classes.bcon}>
                <b className={classes.b}>{blog.created_at}</b>
              </div>
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
