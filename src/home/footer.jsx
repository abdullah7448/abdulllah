import { FaFacebookSquare , FaLinkedin,  FaInstagramSquare , FaGithubSquare , } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";



import "../styles/comphonents-styles/footer.css"
export default function Footer(){
    return(
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer_wrapper">
                        <h3>Contact With Us</h3>
                        <div className="myLinks">

                        <li><a href="https://www.facebook.com/abdullah7448" target="blank" ><FaFacebookSquare className="footer_icon"/></a></li>
                    <li><a href="https://www.instagram.com/f.abdullah7448/" target="blank" ><FaInstagramSquare className="footer_icon" /></a></li>
                    <li><a href="https://www.linkedin.com/in/md-abdullah7448/" target="blank" ><FaLinkedin className="footer_icon" /></a></li>
                    <li><a href="https://github.com/abdullah7448" target="blank" ><FaGithubSquare  className="footer_icon" /></a></li>
                    <li><a href="https://x.com/abdullah657448"  target="blank" ><FaSquareXTwitter className="footer_icon" /></a></li>
                            
                            {/* <FaSquareXTwitter className="footer_icon" />
                            <FaSquareInstagram className="footer_icon" />
                            <FaLinkedin className="footer_icon" />
                            <FaSquareGithub className="footer_icon" />
                            <FaFacebookSquare className="footer_icon"/> */}







                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}