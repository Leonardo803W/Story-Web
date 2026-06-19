import { useState } from "react"; 
import { Link } from "react-router-dom"; 

const NAV_LINKS = [ 
    { to: "/", label: "Home" }, 
    { to: "/EpocheStoriche", label: "Epoche storiche" }, 
    { to: "/IlLatoOscuro", label: "Il lato oscuro e ingegnoso dell'umanità" }, 
    { to: "/Terra", label: "Terra" }, 
    { to: "/Natura", label: "Natura" }, 
    { to: "/Meraviglie", label: "Meraviglie e curiosità" }, 
    { to: "/Continenti", label: "I continenti" }, 
    { to: "/Timeline", label: "Time line" },
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
                
                <h1 className = "titleNavbar">Story Web</h1>
            </div> 
            
            {/* Mobile menu */} 
            <nav className = {isOpen ? "mobile-menu" : "d-none"}> 
                <div className = "mobile-menu-header"> 
                <span>Menu</span> 
                <p onClick={closeMenu}>✕</p> 
                </div> 
                
                <ul className = "mt-4">
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