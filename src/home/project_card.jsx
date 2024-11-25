import { useEffect } from "react";
export default function ProjectCard({projects}) {

    useEffect(()=>{
        // progress-animation
const card_item=document.querySelectorAll(".card_item");

const observer= new IntersectionObserver(entries=>{
   entries.forEach((entry)=>{
       if (entry.isIntersecting) {
           entry.target.classList.add('view_project');
       }
       else {
           entry.target.classList.remove('view_project');
       }
   })
}
)

card_item.forEach((card_item)=>{
   observer.observe(card_item);
})




})

    return(
        <>
            <div className="card_item">
                <img src={projects.image} alt="" />
                <div className="project_info">
                    <h2>{projects.project_name}</h2>
                    <h4>{projects.date}</h4>
                    <a href={projects.link}>VIEW </a> 
                </div>
            </div>
        </>
    )
}