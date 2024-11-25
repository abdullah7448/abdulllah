import about_section_design_img from "../assets/image/vector_ovject_1.png"
import about_section_img_arrow from "../assets/image/shape_1.png"
import { Link } from "react-router-dom"

export default function About_button(){
    return(
        <>
             <div className="text_about_me">
                <img src={about_section_img_arrow} alt=""/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Optio itaque illum in non facilis dolores, iste voluptatibus?
                        Pariatur, officiis voluptatum?
                        Optio itaque illum in non facilis dolores, iste voluptatibus?
                        Pariatur, officiis voluptatum?
                    </p>

                    <div className="contact_button_about">
                        <Link to="/contact" className="Link">Contact me</Link>
                        <img src={about_section_design_img} alt=""/>
                    </div>
                
            </div>
        </>
    )
}