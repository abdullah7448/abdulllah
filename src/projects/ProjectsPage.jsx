import Footer from "../home/footer";
import Header from "../home/header";
import AllProjects from "./all_projects";
import Search from "./search";

export default function ProjectsPage(){
    return(
        <>
         <div>
            <Header/>
            <AllProjects/>
            <Footer/>
         </div>
        </>
    )
}