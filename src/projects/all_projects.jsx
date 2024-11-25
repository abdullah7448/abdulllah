import "../styles/comphonents-styles/projects.css"
import card_img from "../assets/image/e_commerce_card.jpg"
import ProjectCard from "../home/project_card"

export default function AllProjects(){
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
        },
        {
            id:3,
            image:card_img,
            project_name: "My Project",
            date: "2023-11-23",
            link:"#"
        },
        {
            id:4,
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}