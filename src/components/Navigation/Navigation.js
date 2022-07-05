import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';


import "./navigation.scss"

const MENU_URL = 'http://localhost:3001/menu';

const Navigation = () => {
    const [menuItems, setMenuItems] = useState([
        {
            "id": 1,
            "name": "Strona Główna",
            "link": "/"
        },
        {
            "id": 2,
            "name": "Portfolio",
            "link": "/portfolio"
        },
        {
            "id": 3,
            "name": "Kontakt",
            "link": "/contact"
        }

    ])


    return (
        <>
        <section className='top-nav'>
            <a href="/" className='nav-logo'></a>
            <input id="menu-toggle" type="checkbox"  />
            <label className='menu-button-container' htmlFor="menu-toggle">
            <div className='menu-button'></div>
            </label>
            <ul className='menu'>
                {menuItems.map(item => (
                    <li key={item.id}>
                        <NavLink 
                            to={item.link} activeclassname="active"
                            onClick={e => e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.checked = false}
                            >
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>

        </section>
        
        </>
    
    )
}


export default Navigation;