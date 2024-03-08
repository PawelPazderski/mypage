import React from 'react';
import {NavLink} from 'react-router-dom';
import './portfolio.scss'

const Portfolio = () => {
    

    return (
        <>
        <div className='portfolio-container'>
            <h1>Kilka moich ostatnich prac..</h1>
            <div className='portfolio-links'>
                <NavLink className="portfolio-link portfolio-link-grafika" to="/portfolio/grafika">Grafika</NavLink>
                <NavLink className="portfolio-link portfolio-link-developer" to="/portfolio/react">React</NavLink>
            </div>

        </div>
        </>
    )
}
    
export default Portfolio;
