import { height } from "@fortawesome/free-brands-svg-icons/fa42Group"
import { useEffect, useRef, useState } from "react"

export default function Single_Progress_Item({skill}){
    
 
    // states
    const[progress,setProgess]=useState(0);
    const channgeProgress=useRef(null)
    const [isIntersecting, setIsIntersecting]=useState(false)

    useEffect(()=>{
        const observer=new IntersectionObserver((entries)=>{
            entries.forEach(entry => {
                
                if(entry.isIntersecting){
                    setIsIntersecting(entry.isIntersecting)
                    const intervalId= setInterval(() => {
                        if(progress<skill.progress){
                            setProgess((prev)=> Math.min(prev+2, skill.progress));
                        }
                        
                       
                    }, 50);
                    return () => clearInterval(intervalId);
                }else{
                    setProgess(0)
                }
    
            })
    
            
        });
        if (channgeProgress.current) {
            observer.observe(channgeProgress.current);
        }
          
        // return () => observer.disconnect();
    }, [isIntersecting, skill.progress])
       
    return(
        <>
            <div className="single_skill_item">
                <div className="skill_name">
                    <h3>
                        {skill.skillName}
                    </h3>
                    <span ref={channgeProgress}>{progress}</span>
                </div>
                <div className="progress">
                    <div style={{
                        width:`${progress}%`,
                        height:"100%",
                        background:"pink"

                    }} className="progress_percentage">

                    </div>
                </div>
            </div>
            
        </>
    )
}