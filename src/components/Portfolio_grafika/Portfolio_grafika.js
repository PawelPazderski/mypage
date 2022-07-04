import React, { useState, useEffect } from 'react';
import { database } from "./../../firebase"
import { v4 } from "uuid"
import {NavLink} from 'react-router-dom';

import { getDatabase, ref, child, get } from "firebase/database";


import Carousel from 'react-bootstrap/Carousel'
import Spinner from 'react-bootstrap/Spinner'

import Carousel_graphics from './Carousel_graphics';

import './portfolio_grafika.scss'

const Portfolio_grafika = () => {
    const [listItems, setListItems] = useState([])
    const [isDesktop, setDesktop] = useState(window.innerWidth > 960);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 960);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });


    useEffect(() => {
        const dbRef = ref(getDatabase());
            get(child(dbRef, `grafika/`)).then((snapshot) => {
            if (snapshot.exists()) {
                setListItems(snapshot.val());
            } else {
                console.log("No data available");
            }
            }).catch((error) => {
            console.error(error);
            });
    }, [])


    return (
        <>
        <div className='portfolio-grafika-container'>
            <h1>Grafika</h1>
            <div>
            <Carousel_graphics listItems={listItems} isDesktop={isDesktop}/>
            </div>
        </div>
        </>
    )
}
    
export default Portfolio_grafika;