import React from 'react';
import {NavLink} from 'react-router-dom';
import './portfolio_react.scss'

const Portfolio_react = () => {
    

    return (
        <>
        <div className='portfolio-react-container'>
            <h1>React</h1>
            <video width="750" height="500" controls >
                <source src="https://firebasestorage.googleapis.com/v0/b/pawelpazderski-mypage.appspot.com/o/video%2Fmypage.mp4?alt=media&token=f2c8ac8e-0261-4de1-91c5-ec07d6bfc41b" type="video/mp4"/>
            </video>
            <video width="750" height="500" controls >
                <source src="https://firebasestorage.googleapis.com/v0/b/pawelpazderski-mypage.appspot.com/o/video%2Fbandicam%202022-06-18%2017-15-59-600.mp4?alt=media&token=d21395a5-ea1c-48c2-b396-d6f8b5836ffa" type="video/mp4"/>
            </video>
            {/* <div className='portfolio-links'>
                <NavLink className="portfolio-link portfolio-link-grafika" to="/portfolio/grafika">Grafika</NavLink>
                <NavLink className="portfolio-link portfolio-link-developer" to="/portfolio/react">React</NavLink>
            </div> */}

        </div>
        </>
    )
}
    
export default Portfolio_react;