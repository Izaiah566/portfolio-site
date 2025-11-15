import './index.css'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Blog from './pages/Blog'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/Blog" element={<Blog />}/>
          <Route path="/About" element={<About />}/>
          <Route path="Projects" element={<Projects />}/>
          <Route path="Contact" element={<Contact />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
