import React, { useState, useEffect } from 'react';

import Carousel from 'react-bootstrap/Carousel'
import Spinner from 'react-bootstrap/Spinner'

import Zoom from 'react-img-zoom'

import './portfolio_grafika.scss'

const Carousel_graphics = ({listItems, isDesktop}) => {
    const [hover, setHover] = useState(false)

    return (
        <>
        <div className='grafika-images'>
                {(listItems.length && isDesktop) &&
                    <Carousel>
                    {listItems.map((item) => {
                    return <Carousel.Item key={item.id}>
                        <span className="zoom-info">{ !hover ? "( Najedź na obraz, aby powiększyć )" : "" }</span>
                        <div className="carousel-img" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                            <Zoom 
                                img={item.url}
                                zoomScale={2.5}
                                height={500}
                                width={900}
                            />
                        </div>
                        <Carousel.Caption>
                        <h5 className="carousel-graphics-title">{item.title}</h5>
                        {/* <p>{item.title}</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                })}
                </Carousel>
                
                }
                {(listItems.length && !isDesktop) &&
                    <ul>
                        {listItems.map((item) => {
                            return <li key={item.id}>
                                <div className="gallery-item-container">
                                    <img
                                        className="gallery-img"
                                        src={item.url}
                                        alt={item.title}
                                        />
                                    <h5>{item.title}</h5>
                                    <hr/>

                                </div>
                            </li>
                        })}
                    </ul>
                }
                {(!listItems.length) &&
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

export default Carousel_graphics;