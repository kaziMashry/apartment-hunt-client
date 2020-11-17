import React from 'react';
import bg from '../../images/Rectangle 13.png'

const Header = () => {
    return (
        <div className='header mw-100'>
            <img src={bg} className='header-img' width='100%' />
            <div className='header-top mw-100'>
                <h1>FIND YOUR HOUSE RENT</h1>
            </div>
        </div>
    );
};

export default Header;