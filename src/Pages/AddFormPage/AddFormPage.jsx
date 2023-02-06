import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './style.module.css'
import { getApi } from '../../config/apiData'

const AddFormPage = () => {
  const [datas, setData] = useState([])
  const [value, setValue] = useState({
    title: '',
    category: '',
    photo: '',
    paragraph: '',
    user: ''
  })
  const navigate = useNavigate()
  // const [photo,setPhoto] = useState(null)

  useEffect(() => {
    getApi()
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  const handleChange = (key) => (e) => {
    // const value = key === 'photo' ? e.target.files[0] : e.target.value
    setValue({
      ...value,
      [key]: e.target.value
    })
  }

  // const handleChangePhoto = (e) =>{
  //     const image = e.target.files[0]
  //     setPhoto(image)
  // }

  const handleSubmit = () => {
    // const form = new FormData()
    // form.append('title', value.title)
    // form.append('category', value.category)
    // form.append('paragraph', value.paragraph)
    // form.append('photo', photo)
    // form.append('user', value.user)

    fetch('http://localhost:8000/api/article', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
        // 'Content-type' : 'multipart/form-data'
      },
      body: JSON.stringify({
        title: value.title,
        category: value.category,
        paragraph: value.paragraph,
        user: value.user
      })
    })
      .then((res) => res.json())
      .then((data) => setData([...datas, data]))
    navigate('/')

    getApi()
  }
  const formSubmit = (e) => {
    e.preventDefault()

    handleSubmit(handleChange(value))
  }
  return (
    <div className={classes.container}>
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
              value={value.title}
              onChange={handleChange('title')}
            />
          </div>

          <div className={classes.slide}>
            <label className={classes.label}>Category</label>
            <input
              type="text"
              name="category"
              placeholder="enter Category"
              className={classes.input}
              value={value.category}
              onChange={handleChange('category')}
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
              value={value.paragraph}
              onChange={handleChange('paragraph')}
            />
          </div>

          <div className={classes.slide}>
            <label className={classes.label}>User Name</label>
            <input
              type="text"
              name="user"
              placeholder="enter username"
              className={classes.input}
              value={value.user}
              onChange={handleChange('user')}
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
