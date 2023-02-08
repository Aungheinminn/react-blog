import clsx from 'clsx'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './style.module.css'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [div, setDiv] = useState(false)
  // const [none,setNone] =useState(false)
  const [password, setPassword] = useState('')
  // const [divNone,setDivNone] = useState(false)
  const navigate = useNavigate()

  // const errorDiv = clsx(classes.error,{

  // })
  // const btnn = clsx(classes.btn,{
  //   [classes.btnDis]:none
  // })
  const errorDiv = clsx(classes.error, {
    [classes.errAppear]: div
  })

  const adminEmail = 'adam@gmail.com'
  const adminPassword = 'blahblah'
  const onSubmit = (e) => {
    e.preventDefault()
    if (email === adminEmail && password === adminPassword) {
      localStorage.setItem('email', JSON.stringify(email))
      localStorage.setItem('password', JSON.stringify(password))
      setEmail(email)
      setPassword(password)

      return navigate('/home')
    } else if (email !== adminEmail || password !== adminPassword) {
      setDiv(!div)
      setEmail('')
      setPassword('')
      // console.log(div)
    } else if (email !== ' ' || password !== '') {
      // setNone(!div)
      console.log(!div)
    }
  }

  // const getUserApi = async() =>{
  //   const userData = fetch('http://localhost:8000')
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className={classes.main}>
      <div className={errorDiv}>Wrong Email or Password</div>
      <div className={classes.container}>
        <form action="" className={classes.formControl} onSubmit={handleSubmit}>
          <div className={classes.divInput}>
            <label className={classes.label}>Email</label>
            <input
              type="email"
              className={classes.input}
              value={email}
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
          </div>
          <div className={classes.divInput}>
            <label className={classes.label}>Password</label>
            <input
              type="password"
              className={classes.input}
              value={password}
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
          </div>

          {/* {email,password === '' && (<button disabled className={classes.btn} onClick={onSubmit}>None</button>)} */}
          <button className={classes.btn} onClick={onSubmit}>
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
export default LoginPage
