import "../styles/comphonents-styles/projects.css"
import card_img from "../assets/image/e_commerce_card.jpg"
import travel_grp from "../assets/image/travel-grp.png"
import american_food from "../assets/image/american-food.png"
import ProjectCard from "./project_card"
import SeeAllButton from "./see_all_button"



export default function Projects(){
    const projects = [
        {
            id:1,
            image: travel_grp,
            project_name: "Travel Agent",
            date: "25 Dec, 2023",
            link:"https://travel-group.netlify.app/"
        },
        {
            id:2,
            image:american_food,
            project_name: "Ameriran Food",
            date: "10 Jan, 2024",
            link:"https://aquamarine-cactus-a694d9.netlify.app/"
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