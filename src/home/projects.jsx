import "../styles/comphonents-styles/projects.css"
import card_img from "../assets/image/e_commerce_card.jpg"
import ProjectCard from "./project_card"
import SeeAllButton from "./see_all_button"



export default function Projects(){
    const projects = [
        {
            id:1,
            image: card_img,
            project_name: "My Project",
            date: "2023-11-23",
            link:"#"
        },
        {
            id:2,
            image:card_img,
            project_name: "My Project",
            date: "2023-11-23",
            link:"#"
        }
    ]
    
    return(
        <>
            <section className="projects">
                <div className="container">
                    <div className="project_wrapper">
                        <h2>My Projects</h2>
                        <div className="projects_cards_wrapper">
                             
                           {projects.map((projects)=>(
                             <ProjectCard key={projects.id} projects={projects} />
                           ))}
                         <SeeAllButton/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}