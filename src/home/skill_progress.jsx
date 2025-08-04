import { useEffect } from "react";
import Single_Progress_Item from "./single_progress_item";

export default function Skill_Progress(){
    const skillData = [
        {skillId:1, skillName: "HTML", progress: 98},
        {skillId:2, skillName: "CSS", progress: 95},
        {skillId:3, skillName: "SCSS", progress: 80},
        {skillId:4, skillName: "Bootstrap", progress: 80},
        {skillId:5, skillName: "Tailwind", progress: 80},
        {skillId:6, skillName: "JavaScript", progress: 70},
        {skillId:7, skillName: "jQuery", progress: 95},
        {skillId:8, skillName: "REACT", progress: 80},
        {skillId:9, skillName: "Next.js", progress: 60},
        {skillId:10, skillName: "Node js", progress: 95},
        {skillId:11, skillName: "PHP", progress: 75},
        {skillId:12, skillName: "SQL", progress: 90},
        {skillId:13, skillName: "MySQL", progress: 92},
        {skillId:15, skillName: "MongoDB", progress: 80},
        
        
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
