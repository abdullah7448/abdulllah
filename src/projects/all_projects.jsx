import "../styles/comphonents-styles/projects.css"
import card_img from "../assets/image/e_commerce_card.jpg"
import ProjectCard from "../home/project_card"
import travel_grp from "../assets/image/travel-grp.png"
import american_food from "../assets/image/american-food.png"
import lion_commerce from "../assets/image/lion-commerce.png"
import news_theme from "../assets/image/news-theme.png"
import wp_next from "../assets/image/wp-next.png"
import bkrause from "../assets/image/bkrause.png"
import Woo_custom from "../assets/image/woo-custom.png"

export default function AllProjects(){
    const projects = [
        {
            id:1,
            image: wp_next,
            project_name: "Headless Wordpress(wp-next)",
            date: "03 August, 2025",
            link:"https://wp-next-blue.vercel.app/"
        },
        {
            id:2,
            image: Woo_custom,
            project_name: "Woo-Custom Theme(hook-action)",
            date: "12 July , 2025",
            link:"https://github.com/abdullah7448/woo-custom-theme"
        },

        {
            id:3,
            image: bkrause,
            project_name: "bkrause(live-project)",
            date: "15 june, 2025",
            link:"https://bkrause.softvenceomega.com/"
        },
        {
            id:4,
            image: wp_next,
            project_name: "bkrause(live-project)",
            date: "15 june, 2025",
            link:"https://bkrause.softvenceomega.com/"
        },
        {
            id:5,
            image: travel_grp,
            project_name: "Travel Agent",
            date: "25 Dec, 2023",
            link:"https://travel-group.netlify.app/"
        },
        {
            id:6,
            image:american_food,
            project_name: "Ameriran Food",
            date: "10 Jan, 2024",
            link:"https://aquamarine-cactus-a694d9.netlify.app/"
        },
        {
            id:7,
            image:lion_commerce,
            project_name: "Lion Commerce",
            date: "25 Jan, 2024",
            link:"https://lion-commerce.netlify.app/"
        },
        {
            id:8,
            image:news_theme,
            project_name: "NEWS THEME (custom)",
            date: "10 Feb, 2025",
            link:"https://github.com/abdullah7448/news-theme" 
        }
        //mdabdullah-portfolio
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