import { Link } from "react-router-dom"
import "../styles/comphonents-styles/blog.css"
export default function BlogHeader(){
    return(
        <>
             
             <h2>My Blogs</h2>
             <Link to="/blogs" className="Link">See All </Link>
             
        </>
    )
}