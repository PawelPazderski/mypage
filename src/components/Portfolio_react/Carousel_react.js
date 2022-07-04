import React, { useState, useEffect } from 'react';

import Carousel from 'react-bootstrap/Carousel'
import Spinner from 'react-bootstrap/Spinner'


import './portfolio_react.scss'

const Carousel_react = ({reactItems, isDesktop}) => {

    return (
        <>
        <div className='react-images'>
                {(reactItems.length && isDesktop) &&
                    <Carousel>
                    {reactItems.map((item) => {
                    return <Carousel.Item key={item.id}>
                        <video
                        className="carousel-video"
                        width="800"
                        height="auto"
                        controls
                        >
                            <source src={item.url} type="video/mp4"/>
                        </video>
                        <Carousel.Caption>
                        <h5>{item.title}</h5>
                        <h6>zasosowane technologie</h6>
                        <h6>link do kodu</h6>
                        {/* <p>{item.title}</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                })}
                </Carousel>
                
                }
                {(reactItems.length && !isDesktop) &&
                    <ul>
                        {reactItems.map((item) => {
                            return <li key={item.id}>
                                <div className="gallery-react-item-container">
                                <video
                                    className="carousel-video gallery-carousel-video"
                                    width="750"
                                    height="auto"
                                    controls
                                    >
                                        <source src={item.url} type="video/mp4"/>
                                </video>
                                    <h5>{item.title}</h5>
                                    <h6>zasosowane technologie</h6>
                                    <h6>link do kodu</h6>
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
        </>
    )
}

export default Carousel_react;