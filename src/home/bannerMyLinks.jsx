import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FaFacebookSquare , FaLinkedin,  FaInstagramSquare , FaGithubSquare , } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";



export default function BannerLinks(){
    return(
        <>
            <div className="icon_link">
                <ul>
                    <li><a href="https://www.facebook.com/abdullah7448"target="blank" ><FaFacebookSquare className="icons"/></a></li>
                    <li><a href="https://www.instagram.com/f.abdullah7448/" target="blank" ><FaInstagramSquare className="icons" /></a></li>
                    <li><a href="https://www.linkedin.com/in/md-abdullah7448/" target="blank" ><FaLinkedin className="icons" /></a></li>
                    <li><a href="https://github.com/abdullah7448" target="blank" ><FaGithubSquare  className="icons" /></a></li>
                    <li><a href="https://x.com/abdullah657448"  target="blank" ><FaSquareXTwitter className="icons" /></a></li>

                </ul>
            </div>
        </>
    )
}