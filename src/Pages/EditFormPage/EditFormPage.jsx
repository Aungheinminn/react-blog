import React, { useState } from 'react'
import { useEffect } from 'react'
// import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import classes from './style.module.css'
import { getApi } from '../../config/apiData'

const EditFormPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  // const [datas, setData] = useState([])
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [paragraph, setParagraph] = useState('')
  const [user, setUser] = useState('')
  // const [value, setValue] = useState({
  //   title: '',
  //   category: '',
  //   photo: '',
  //   paragraph: '',
  //   user: ''
  // })

  const getEachApi = async () => {
    return await fetch('http://localhost:8000/api/article/' + id, {
      method: 'GET',
      header: {
        'Content-type': 'application/json'
      }
    })
  }

  useEffect(() => {
    getEachApi()
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title)
        // setTitle({
        //   ...data,
        //   [key]:'title'
        // })
        setCategory(data.category)
        setParagraph(data.paragraph)
        setUser(data.user)
      })
    // console.log(datas)
    //  console.log(eachId)
  }, [])

  const handleSubmit = () => {
    // const form = new FormData()
    // form.append('title', value.title)
    // form.append('category', value.category)
    // form.append('paragraph', value.paragraph)
    // form.append('photo', photo)
    // form.append('user', value.user)

    fetch('http://localhost:8000/api/article/' + id, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        category: category,
        paragraph: paragraph,
        user: user
      })
    })
    // .then((res) => res.json())
    // .then((data) => setData(data))
    navigate('/home')

    getApi()
  }
  const formSubmit = (e) => {
    e.preventDefault()

    handleSubmit()
  }
  return (
    <div className={classes.container}>
      <div className={classes.btn}>
        <Link to={`/blog/${id}`} className={classes.link}>
          Go Back
        </Link>
      </div>
      <div className={classes.wrap}>
        <form
          action=""
          method=""
          encType="multipart/form-data"
          className={classes.formControl}
          onSubmit={formSubmit}>
          <div className={classes.slide}>
            <label className={classes.label}>Title</label>
            <input
              type="text"
              name="title"
              placeholder="enter title"
              className={classes.input}
              value={title}
              onChange={(e) => {
                setTitle(e.target.value)
              }}
            />
          </div>

          <div className={classes.slide}>
            <label className={classes.label}>Category</label>
            <input
              type="text"
              name="category"
              placeholder="enter Category"
              className={classes.input}
              value={category}
              onChange={(e) => {
                setCategory(e.target.value)
              }}
            />
          </div>

          {/* <div className={classes.slide}>
            <label className={classes.label}>Photo</label>
            <input type="file" name="photo"  onChange={handleChangePhoto} />
          </div> */}

          <div className={classes.slide}>
            <label className={classes.label}>Body</label>
            <input
              type="text"
              name="paragraph"
              placeholder="enter paragraph"
              className={classes.input}
              value={paragraph}
              onChange={(e) => {
                setParagraph(e.target.value)
              }}
            />
          </div>

          <div className={classes.slide}>
            <label className={classes.label}>User Name</label>
            <input
              type="text"
              name="user"
              placeholder="enter username"
              className={classes.input}
              value={user}
              onChange={(e) => {
                setUser(e.target.value)
              }}
            />
          </div>

          <button className={classes.btn} onSubmit={handleSubmit}>
            submit
          </button>
        </form>
      </div>
      {/* <input type="text" value={re} onChange={(e)=>setRe(e.target.value)}/> */}
      {/* <span>{re}</span> */}
    </div>
  )
}
export default EditFormPage
