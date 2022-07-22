import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import './portfolio_react.scss'

import { getDatabase, ref, child, get } from "firebase/database";
import Carousel_react from './Carousel_react';

const Portfolio_react = () => {
    const [reactItems, setReactItems] = useState([])
    const [isDesktop, setDesktop] = useState(window.innerWidth > 960);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 960);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    },[]);

    useEffect(() => {
        const dbRef = ref(getDatabase());
            get(child(dbRef, `react/`)).then((snapshot) => {
            if (snapshot.exists()) {
                setReactItems(snapshot.val());
            } else {
                console.log("No data available");
            }
            }).catch((error) => {
            console.error(error);
            });
    },[isDesktop])
    

    return (
        <>
        <div className='portfolio-react-container'>
            <h1>React</h1>
            <div className='react-images'>
            {(reactItems.length && isDesktop) 
            &&
            <Carousel_react reactItems={reactItems} isDesktop={isDesktop}/>
            }
            {(reactItems.length && !isDesktop) 
            &&
            <ul>
                {reactItems.map((item) => {
                    return <li key={item.id}>
                            <div className="gallery-react-item-container">
                            <h5>{item.title}</h5>
                                <video
                                    className="carousel-video gallery-carousel-video"
                                    width="750"
                                    height="auto"
                                    controls
                                    >
                                        <source src={item.url} type="video/mp4"/>
                                </video>
                                
                                <h6>{item.technologies}</h6>
                                <div className="react-links">
                                    { (!item.title.includes('desktop')) && <a className="portfolio-react-link" target="_blank" rel="noreferrer" href={item.page}>Strona</a>}
                                    <a className="portfolio-react-link" target="_blank" rel="noreferrer" href={item.link}>Kod</a>
                                </div>
                                <hr/>
                            </div>
                            </li>
                        })}
                </ul>
            }

            {(!reactItems.length) &&
                <div className="spinner-container">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            }
            </div>
        </div>
        </>
    )
}
    
export default Portfolio_react;