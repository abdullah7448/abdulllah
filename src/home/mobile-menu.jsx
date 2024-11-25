import { useState,useEffect } from "react";
import "../styles/comphonents-styles/header.css"
import { Link } from "react-router-dom";


export default function Menu_mobile({onClose,activeLink}){
   const [isElementVisible,setIsElementVisible]=useState(false)
    useEffect(() => {
        setTimeout(() => {
          setIsElementVisible(true);
          }, 10); 
      }, [onClose]);
    return(
     
        <>
        <div className={`mobile_nav ${isElementVisible ? 'show' : ''} ${onClose ? '' : 'hide'}`}>
                <nav>
                    <ul>
                        <li><Link to="/" className={ `${activeLink === 'home' ? 'mobActive' : ''}`} >Home</Link></li>
                        <li><Link to="/projects" className={  ` ${activeLink === 'projects' ? 'mobActive' : ''}`}>Projects</Link></li>
                        <li><Link to="/blogs" className={  ` ${activeLink === 'blogs' ? 'mobActive' : ''}`}>Blogs</Link></li>
                        <li><Link to="/contact" className={ ` ${activeLink === 'contact' ? 'mobActive' : ''}`}>Contact</Link></li>
                    </ul>
                </nav>
            </div> 
        </>
    )
}