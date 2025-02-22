import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faDownload} from '@fortawesome/free-solid-svg-icons'
import myImg from "../assets/image/myDp.jpg"
import cv from "../assets/text-file/v11-portfolio.pdf"
export default function My_img(){
    return(
        <>
            <div className="my_img">
                <div className="image_me">
                    <img src={myImg} alt="loading"/>
                </div>
                
                <div className="bg_1">
                    <div className="bg_2">
                        <a target="blank" href={cv}>
                            <FontAwesomeIcon icon={faDownload} className="icon_download" /> <br/> 
                            <span>CV</span>
                        </a>
                    
                    </div>
                </div>
                
            </div>
           
        </>
    )
}