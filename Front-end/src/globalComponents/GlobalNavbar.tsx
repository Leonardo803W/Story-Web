import { useState } from "react"; 
import { Link } from "react-router-dom"; 

const NAV_LINKS = [ 
    { to: "/", label: "Home" }, 
    { to: "/epoche-storiche", label: "Epoche storiche" }, 
    { to: "/storie", label: "Il lato oscuro e ingegnoso dell'umanità" }, 
    { to: "/planets", label: "Terra" }, 
    { to: "/Natura", label: "Natura" }, 
    { to: "/continents", label: "I continenti" }, 
  ]; 

const GlobalNavbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(prev => !prev); 
    const closeMenu = () => setIsOpen(false); 

    return (
        <>
            {/* Mobile */} 
            <div className = "globalNavbar"> 
                <button onClick = {toggleMenu} className = "buttonNavbar"> ☰ </button> 
                
                <Link to="/" className = "w-75">
                    <h1 className = "titleNavbar">Story Web</h1>
                </Link>
            </div> 
            
            {/* Mobile menu */} 
            <nav className = {isOpen ? "mobile-menu" : "d-none"}> 
                <div className = "mobile-menu-header"> 
                <span>Menu</span> 
                <p onClick={closeMenu}>✕</p> 
                </div> 
                
                <ul className = "item_menu">
                    {NAV_LINKS.map((link) => (
                        <li key={link.to} onClick = {closeMenu} className = "mobile-menu-item">
                            <Link to={link.to}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav> 
        </>
    );
}

export default GlobalNavbar;