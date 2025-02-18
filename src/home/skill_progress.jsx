import { useEffect } from "react";
import Single_Progress_Item from "./single_progress_item";

export default function Skill_Progress(){
    const skillData = [
        {skillId:1, skillName: "HTML5", progress: 80},
        {skillId:2, skillName: "Css3", progress: 80},
        {skillId:3, skillName: "Bootstrap", progress: 80},
        {skillId:4, skillName: "Tailwind", progress: 80},
        {skillId:5, skillName: "JavaScript", progress: 80},
        {skillId:6, skillName: "REACT", progress: 80},
        {skillId:7, skillName: "Node js", progress: 80},
        {skillId:11, skillName: "jQuery", progress: 80}
        {skillId:9, skillName: "PHP", progress: 80},
        {skillId:10, skillName: "MySQL", progress: 80},
        
        
    ];
    
    useEffect(()=>{
             // progress-animation
    const progressItems=document.querySelectorAll(".single_skill_item");

    const observer= new IntersectionObserver(entries=>{
        entries.forEach((entry)=>{
            if (entry.isIntersecting) {
                entry.target.classList.add('view');
            }
            else {
                entry.target.classList.remove('view');
            }
        })
    })

    progressItems.forEach((progressItem)=>{
        observer.observe(progressItem);
    })
    
    
   

    })
  
    return(
        <>
            <div className="skill_progress">
                {
                    skillData.map((skill)=>(
                        <Single_Progress_Item key={skill.skillId} skill={skill} />
                    ))
                }
            </div>
        </>
    )
}
