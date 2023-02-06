import React, { useState } from 'react'
import classes from './style.module.css'
import BlogList from '../../components/BlogList'
import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'
// import { blogList } from '../../config/data'
import EmptyList from '../../components/BlogList/EmptyList'
import { useEffect } from 'react'
import { getApi } from '../../config/apiData'

const HomePage = () => {
  const [datas, setData] = useState([])

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
    // setData(datas)
    getApi()
  }
  return (
    <div className={classes.container}>
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
