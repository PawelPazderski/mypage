import React, { useState, useEffect } from 'react';
import { database } from "./../../firebase"
import { v4 } from "uuid"
import {NavLink} from 'react-router-dom';

import { getDatabase, ref, child, get } from "firebase/database";


import Carousel from 'react-bootstrap/Carousel'

import './portfolio_grafika.scss'

const Portfolio_grafika = () => {
    const [listItems, setListItems] = useState([])


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
            <div className='grafika-images'>
                {listItems.length
                ?
                <Carousel>
                    {listItems.map((item) => {
                    return <Carousel.Item>
                        <img
                        className="carousel-img"
                        src={item.url}
                        alt={item.title}
                        />
                        <Carousel.Caption>
                        <h5>{item.title}</h5>
                        {/* <p>{item.title}</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                })}
                </Carousel>
                
                :
                <h2>Loading...</h2>
            }
            </div>
        </div>
        </>
    )
}
    
export default Portfolio_grafika;