import React, { useState } from 'react'
import classes from './style.module.css'
import BlogList from '../../components/BlogList'
import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'
import EmptyList from '../../components/BlogList/EmptyList'
import { useEffect } from 'react'
import { getApi } from '../../config/apiData'
import NavBar from '../../components/NavBar/NavBar'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const [datas, setData] = useState([])
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
  useEffect(() => {
    getApi()
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  const [search, setSearch] = useState('')

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    handleAllSearch()
  }
  const handleAllSearch = () => {
    const allBlog = datas
    const filterBlog = allBlog.filter((data) =>
      data.category.toLowerCase().includes(search.toLowerCase().trim())
    )
    setData(filterBlog)
  }

  const handleClearSearch = () => {
    setSearch('')

    window.location.reload()
    console.log(datas)
  }

  return (
    <div className={classes.container}>
      <NavBar />
      <Header />
      <SearchBar
        value={search}
        formSubmit={handleSearchSubmit}
        // handleReset={handleBlogReset}
        handleSearch={(e) => setSearch(e.target.value)}
        clearSearch={handleClearSearch}
      />
      {/* <BlogList blogs={datas} /> */}
      {datas.length ? <BlogList blogs={datas} /> : <EmptyList />}
    </div>
  )
}
export default HomePage
