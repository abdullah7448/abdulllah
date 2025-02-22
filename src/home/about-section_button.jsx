import about_section_design_img from "../assets/image/vector_ovject_1.png"
import about_section_img_arrow from "../assets/image/shape_1.png"
import { Link } from "react-router-dom"

export default function About_button() {
    return (
        <>
            <div className="text_about_me">
                <img src={about_section_img_arrow} alt="" />
                <p> Hi, I am Abdullah Studying Bsc in CSE. My aim to be Full-Stack Web Developer with a strong foundation in front-end and back-end
                    development. Seeking a challenging role to design, develop, and deploy robust web
                    applications from conception to deployment.

                </p>

                <div className="contact_button_about">
                    <Link to="/contact" className="Link">Contact me</Link>
                    <img src={about_section_design_img} alt="" />
                </div>

            </div>
        </>
    )
}