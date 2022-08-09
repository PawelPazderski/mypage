import React from 'react';
import {NavLink} from 'react-router-dom';
import './success.scss'

const Success = () => {
    

    return (
        <>
        <div className='success-container'>
            <h2>Wiadomość wysłana pomyślnie.</h2>
            <h2>Dziękuję.</h2>
            <NavLink className="success-link" to="/">Strona główna</NavLink>
        </div>
        </>
    )
}
    
export default Success;