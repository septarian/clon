import React, { useState } from "react";
import '../App.css'
import './menu.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-brands-svg-icons'
import {} from '@fortawesome/fontawesome-svg-core'


function Menu() {
    
const [isOpen, setIsOpen] = useState(false);
const toggleMenu = () => {

    setIsOpen(!isOpen);
};


return(
    <div className={`menu ${isOpen ? 'open' : ''}`}>
        <div className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    <div className="menu">
        <ul>
            <li>Inicio</li>
            <li>Unidades</li>
            <li>Vigilancvia</li>
            <li>caja</li>
            <li>catalogos</li>
        </ul>
    </div>
    </div>

);
}

export default Menu