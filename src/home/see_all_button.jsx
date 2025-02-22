import { Link } from "react-router-dom"
import "../styles/comphonents-styles/projects.css"
export default function SeeAllButton(){
    return(
        <>
            {/* //<Link></a>  */}
            <Link  to="/projects">See All</Link>
        </>
    )
}