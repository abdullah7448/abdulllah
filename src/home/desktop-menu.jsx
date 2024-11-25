import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBars,faX} from '@fortawesome/free-solid-svg-icons'
import "../styles/comphonents-styles/header.css"
import { Link } from "react-router-dom";

export default function Menu_desktop({tooggleMenu,onClose,activeLink}){
  
    return (
    <>
           
       
            <div className="container">
                <div className="header-wrapper">
                    <div className="name">
                        <h1><Link to="/">Md Abdullah</Link></h1>
                    </div>
                    <div className="navigation">
                        <nav>
                            <ul>
                                <li><Link to="/" className={ `${activeLink === 'home' ? 'active' : ''}`}>Home</Link></li>
                                <li><Link to="/projects" className={  ` ${activeLink === 'projects' ? 'active' : ''}`}>Projects</Link></li>
                                <li><Link to="/blogs" className={  ` ${activeLink === 'blogs' ? 'active' : ''}`} >Blogs</Link></li>
                                <li><Link to="/contact" className={ ` ${activeLink === 'contact' ? 'active' : ''}`} >Contact</Link></li>
                              
                            </ul>
                        </nav>
                     </div>
                     <div className="icon">
                     {!onClose ? (
                            <FontAwesomeIcon icon={faBars} onClick={tooggleMenu} />
                            ) : (
                            <FontAwesomeIcon icon={faX} onClick={tooggleMenu} />
                            )}
                    </div>

                </div>
            </div>
        
       
    

    </>
        
    )
}