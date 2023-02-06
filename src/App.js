// import { Router } from 'react-router-dom';
import classes from './App.module.css'
import HomePage from './Pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import BlogPage from './Pages/BlogPage'
import Test from './components/Test/Test'
import AddFormPage from './Pages/AddFormPage/AddFormPage'
import EditFormPage from './Pages/EditFormPage/EditFormPage'

function App() {
  return (
    <div className={classes.container}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/test" element={<Test />} />
        <Route path="/add" element={<AddFormPage />} />
        <Route path="/edit/:id" element={<EditFormPage />} />
      </Routes>
    </div>
  )
}

export default App
