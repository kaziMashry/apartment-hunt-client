import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from './Header';
import HomeRent from './HomeRent';
import Service from './Service';

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <HomeRent />
            <Service />
        </>
    );
};

export default Home;