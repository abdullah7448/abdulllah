import "../styles/comphonents-styles/projects.css"
import card_img from "../assets/image/e_commerce_card.jpg"
import wp_next from "../assets/image/wp-next.png"
import bkrause from "../assets/image/bkrause.png"
import ProjectCard from "./project_card"
import SeeAllButton from "./see_all_button"



export default function Projects(){
    const projects = [
        {
            id:1,
            image: wp_next,
            project_name: "Headless Wordpress(wp-next)",
            date: "03 Sept, 2025",
            link:"https://wp-next-blue.vercel.app/"
        },
        {
            id:2,
            image: bkrause,
            project_name: "bkrause(live-project)",
            date: "15 june, 2025",
            link:"https://bkrause.softvenceomega.com/"
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