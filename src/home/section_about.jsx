import "../styles/comphonents-styles/about_section.css"
import About_button from "./about-section_button"
import About_section_img from "./about_section_img"


export default function About_Section(){
    return(
        <>
          <div className="about_section">
                <div className="container">
                    <div className="about_section_wrapper">
                            <About_section_img/>
                            <About_button/>
                    </div>
                </div>
        </div>  
        </>
    )
}