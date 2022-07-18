import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

import Carousel from 'react-bootstrap/Carousel'



import './portfolio_react.scss'

const Carousel_react = ({reactItems, isDesktop}) => {

    return (
        <>
        <div className='react-images'>
                <Carousel>
                    {reactItems.map((item) => {
                    return <Carousel.Item key={item.id}>
                        <h5 className="carousel-title">{item.title}</h5>
                        <video
                        className="carousel-video"
                        width="800"
                        height="auto"
                        controls
                        >
                            <source src={item.url} type="video/mp4"/>
                        </video>
                        <Carousel.Caption>
                        
                        <h6>{item.technologies}</h6>
                        <div className="react-links">
                            <a className="portfolio-react-link" target="_blank" rel="noreferrer" href={item.page}>Strona</a>
                            <a className="portfolio-react-link" target="_blank" rel="noreferrer" href={item.link}>Kod</a>
                        </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    })}
                </Carousel>
            </div>
        </>
    )
}

export default Carousel_react;