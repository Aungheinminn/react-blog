import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import classes from './style.module.css'

const EditFormPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const email = localStorage.getItem('email')
  const password = localStorage.getItem('email')
  const load = () => {
    if (!email || !password) {
      return navigate('/')
    }
  }

  useEffect(() => {
    load()
  })

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [paragraph, setParagraph] = useState('')
  const [user, setUser] = useState('')
  const [photo, setPhoto] = useState(null)

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
        setCategory(data.category)
        setParagraph(data.paragraph)
        setUser(data.user)
        setPhoto(data.photo)
        console.log(data)
      })
  }, [])
  const handleSubmit = () => {
    let form = new FormData()
    form.append('title', title)
    form.append('category', category)
    form.append('paragraph', paragraph)
    form.append('photo', photo)
    form.append('user', user)
    form.append('_method', 'PUT')
    // debugger

    fetch('http://localhost:8000/api/article/' + id, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        type: 'formData'
      },
      body: form
    })
    navigate('/home')
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
              autoFocus
              autoComplete="off"
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
              autoComplete="off"
              autoCapitalize="on"
              placeholder="enter Category"
              className={classes.input}
              value={category}
              onChange={(e) => {
                setCategory(e.target.value)
              }}
            />
          </div>

          <div className={classes.slide}>
            <label className={classes.label}>Photo</label>
            <input
              type="file"
              name="photo"
              onChange={(e) => setPhoto(e.target.files[0])}
            />
          </div>

          <div className={classes.slide}>
            <label className={classes.label}>Body</label>
            <textarea
              type="text"
              name="paragraph"
              autoComplete="off"
              placeholder="enter paragraph"
              className={classes.input}
              value={paragraph}
              onChange={(e) => {
                setParagraph(e.target.value)
              }}></textarea>
          </div>

          <div className={classes.slide}>
            <label className={classes.label}>User Name</label>
            <input
              type="text"
              name="user"
              autoComplete="off"
              placeholder="enter username"
              className={classes.input}
              value={user}
              onChange={(e) => {
                console.log(user)
                setUser(e.target.value)
              }}
            />
          </div>

          <button className={classes.btn} onSubmit={handleSubmit}>
            submit
          </button>
        </form>
      </div>
    </div>
  )
}
export default EditFormPage
