import { useEffect, useState } from "react";

import Menu_desktop from "./desktop-menu";
import Menu_mobile from "./mobile-menu";
import { useLocation } from "react-router-dom";

export default function Header(){
   const [Bar, setBar]=useState(false)
   const [isMenuOpen, setIsMenuOpen]=useState(false)
    const tooggleMenu =()=>{
        setIsMenuOpen(!isMenuOpen);

    }
     // activeLInk
   const [activeLink, setActiveLink] = useState('home');

  //  const handleLinkClick = (link) => {
  //     // setActiveLink(link);
  //     console.log(activeLink)
  //   };
    const location = useLocation();
    useEffect(() => {
      const currentPath = location.pathname;
      setActiveLink(currentPath.split('/')[1] || 'home'); // Default to 'home' if path is '/'
    }, [location]);
    
   

return(
    <>
        <header>
        <Menu_desktop tooggleMenu={tooggleMenu} onClose={isMenuOpen} activeLink={activeLink}/>
        <Menu_mobile onClose={isMenuOpen} activeLink={activeLink}/>
        </header>
    </>   
    )
}