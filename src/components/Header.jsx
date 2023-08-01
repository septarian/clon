import React from 'react';
import '../App.css';
import toggleMenu from './Menu'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faExpand} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-brands-svg-icons'
import {} from '@fortawesome/fontawesome-svg-core'

function Header() {
    return(

    <header className="header-custom">   

    <div className="margin-menu">   
            <FontAwesomeIcon icon={faBars} className='menu-icon'/>
            <FontAwesomeIcon icon={faExpand} className='menu-icon'/>
    </div>
    <a> Erick Fernando Mora Carbajal</a>

    </header>

    );
}

export default Header;