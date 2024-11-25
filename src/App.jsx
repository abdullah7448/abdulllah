import { Route, Routes } from "react-router-dom"
import Home from "./home/home.jsx"
import ContactPage from "./contact/Contact.jsx"
import ProjectsPage from "./projects/ProjectsPage.jsx"
import BlogPage from "./blogs/Blog.jsx"
import NotFound from "./notFound/notFound.jsx"

export default function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/blogs" element={<BlogPage/>}/>
      <Route path="/projects" element={<ProjectsPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
        
        
    </>
  )
}


