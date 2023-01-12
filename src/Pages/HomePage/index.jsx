import React, { useState } from 'react'
import classes from './style.module.css'
import BlogList from '../../components/BlogList'
import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'
import { blogList } from '../../config/data'
import EmptyList from '../../components/BlogList/EmptyList'

const HomePage = () => {
  const [blogs, setBlogs] = useState(blogList)
  const [search, setSearch] = useState('')

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    handleSearchBlog()
  }
  const handleSearchBlog = () => {
    const allBlogs = blogList

    const filterBlog = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(search.toLowerCase().trim())
    )

    setBlogs(filterBlog)
  }
  const handleClearSearch = () => {
    setBlogs(blogList)
    setSearch('')
  }

  return (
    <div className={classes.container}>
      <Header />
      <SearchBar
        value={search}
        formSubmit={handleSearchSubmit}
        handleSearch={(e) => setSearch(e.target.value)}
        clearSearch={handleClearSearch}
      />
      {blogs.length ? <BlogList blogs={blogs} /> : <EmptyList />}
      {/* <EmptyList />  */}
    </div>
  )
}

export default HomePage
