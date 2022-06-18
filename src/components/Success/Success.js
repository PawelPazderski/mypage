import React from 'react';
import {NavLink} from 'react-router-dom';
import './success.scss'

const Success = () => {
    

    return (
        <>
        <div className='success-container'>
            <h1>Wiadomość wysłana pomyślnie.</h1>
            <h1>Dziękuję.</h1>
            <NavLink className="success-link" to="/">Strona główna</NavLink>
        </div>
        </>
    )
}
    
export default Success;