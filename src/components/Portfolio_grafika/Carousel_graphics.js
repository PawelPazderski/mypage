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
                {(listItems && isDesktop) &&
                    <Carousel>
                        
                    {listItems.map((item) => {
                    return <Carousel.Item key={item.id}>
                        <h5 className="carousel-graphics-title">{item.title}</h5>
                        {!item.title.includes('Współpraca') && <span className="zoom-info">{ !hover ? "( Najedź na obraz, aby powiększyć )" : "" }</span>}
                        <div className="carousel-img" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                            {item.title.includes('Współpraca') 
                            ?
                            <img
                                className="carousel-cooperation-img"
                                src={item.url}
                                alt={item.title}
                            />    
                            :
                            <Zoom 
                                img={item.url}
                                zoomScale={2.5}
                                height={500}
                                width={900}
                            />
                            }
                        </div>
                        {/* <Carousel.Caption>
                            <h5 className="carousel-graphics-title">{item.title}</h5>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                })}
                </Carousel>
                
                }
                {(listItems && !isDesktop) &&
                    <ul>
                        {listItems.map((item, index) => {
                            return <li key={item.id}>
                                
                                <div className="gallery-item-container">
                                {/* <span className="gallery-item-title">{item.title}</span> */}
                                {index === listItems.length - 1 && (<span className="gallery-item-title">{item.title}</span>)}
                                    <img
                                        className="gallery-img"
                                        src={item.url}
                                        alt={item.title}
                                        />
                                    
                                    {/* <hr/> */}

                                </div>
                            </li>
                        })}
                    </ul>
                }
                {(!listItems) &&
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
