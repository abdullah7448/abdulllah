import "../styles/comphonents-styles/skill.css"
import Skill_Header from "./skill_header";
import Skill_Progress from "./skill_progress";

export default function Skill(){
    return(
        <>
            <div className="skill">
                <div className="container">
                    <div className="skill_wrapper">
                        <Skill_Header/> 
                        <Skill_Progress/>                   
                    </div>
                </div>
            </div>
        </>
    )
}