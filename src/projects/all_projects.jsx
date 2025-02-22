import "../styles/comphonents-styles/projects.css"
import card_img from "../assets/image/e_commerce_card.jpg"
import ProjectCard from "../home/project_card"
import travel_grp from "../assets/image/travel-grp.png"
import american_food from "../assets/image/american-food.png"
import lion_commerce from "../assets/image/lion-commerce.png"
import news_theme from "../assets/image/news-theme.png"

export default function AllProjects(){
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
        },
        {
            id:3,
            image:lion_commerce,
            project_name: "Lion Commerce",
            date: "25 Jan, 2024",
            link:"https://lion-commerce.netlify.app/"
        },
        {
            id:4,
            image:news_theme,
            project_name: "NEWS THEME",
            date: "10 Feb, 2025",
            link:"https://github.com/abdullah7448/news-theme" 
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