// import { Router } from 'react-router-dom';
import classes from './App.module.css'
import HomePage from './Pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import BlogPage from './Pages/BlogPage'

function App() {
  return (
    <div className={classes.container}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<BlogPage />} />
      </Routes>
    </div>
  )
}

export default App
