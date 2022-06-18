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

    // useEffect(()=>{
    //     fetch(MENU_URL)
    //         .then(res => {
    //             if(res.ok) {
    //                 return res.json()
    //             }
    //             window.alert("Błąd")
    //         })
    //         .then(menuItems => setMenuItems(menuItems))
    // },[])

    return (
        <>
        <section className='top-nav'>
            <div className='nav-logo'>
            </div>
            <input id="menu-toggle" type="checkbox"  />
            <label className='menu-button-container' htmlFor="menu-toggle">
            <div className='menu-button'></div>
            </label>
            <ul className='menu'>
            {menuItems.map(item => (
                    <li key={item.id} onClick={e => e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.checked = false}>
                        <NavLink to={item.link} activeclassname="active">
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