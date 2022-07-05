import React, { useState, useEffect } from 'react';
import {NavLink} from 'react-router-dom';
import './portfolio_react.scss'

import { getDatabase, ref, child, get } from "firebase/database";

import Carousel from 'react-bootstrap/Carousel'

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
                <Carousel_react reactItems={reactItems} isDesktop={isDesktop}/>
            </div>
        </div>
        </>
    )
}
    
export default Portfolio_react;