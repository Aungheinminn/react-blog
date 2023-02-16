import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import classes from './style.module.css'

const AddFormPage = () => {
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
  const [datas, setData] = useState([])

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [paragraph, setParagraph] = useState('')
  const [user, setUser] = useState('')
  const [photo, setPhoto] = useState(null)
  const ref = useRef()

  const navigate = useNavigate()

  const handleSubmit = async () => {
    let form = new FormData()
    form.append('title', title)
    form.append('category', category)
    form.append('photo', photo)
    form.append('paragraph', paragraph)
    form.append('user', user)
    fetch('http://localhost:8000/api/article', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        type: 'formData'
      },
      body: form
    })
      .then((res) => res.json())
      .then((data) => setData([...datas, data]))
    ref.current.value = ''
    navigate('/home')
  }
  const formSubmit = (e) => {
    e.preventDefault()

    handleSubmit()
  }
  return (
    <div className={classes.container}>
      <div className={classes.btn}>
        <Link to="/home" className={classes.link}>
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
              autoFocus
              autoComplete="off"
              name="title"
              placeholder="enter title"
              className={classes.input}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className={classes.slide}>
            <label className={classes.label}>Category</label>
            <input
              type="text"
              name="category"
              autoCapitalize="on"
              autoComplete="off"
              placeholder="enter Category"
              className={classes.input}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <div className={classes.slide}>
            <label className={classes.label}>Photo</label>
            <input
              type="file"
              name="photo"
              ref={ref}
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
              onChange={(e) => setParagraph(e.target.value)}></textarea>
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
              onChange={(e) => setUser(e.target.value)}
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
export default AddFormPage
