import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import logo from '../../logos/Logo.png';
import AddRentHouse from './AddRentHouse';
import BookingList from './BookingList';
import MyRent from './MyRent';

const Dashboard = () => {
    const [option, setOption] = useState('bookingList');
    const [loggedinUser, setLoggedinUser] = useContext(userContext);

    const activeText = {
        color: "#275A53"
    }

    const inActiveText = {
        color: "#000"
    }

    return (
        <section style={{ backgroundColor: '#f5f5f7' }}>
            <div className="mw-100 bg-white pt-3 pb-2 pl-4 pr-4 d-flex justify-content-between">
                <Link to='/'><img src={logo} alt='' className='img-fluid p-0' style={{ width: '140px' }} /></Link>
                <h3 className="font-weight-bold text-brand">{loggedinUser.name}</h3>
            </div>
            <div className='mw-100 ml-0 row'>
                <div className='col-md-2 col-sm-12 mh-100 bg-white pt-3 pl-3 vh-100' style={{}}>

                    <div className="d-flex justify-content-start align-items-center mb-4 mt-4" style={{ cursor: 'pointer' }} onClick={() => setOption('bookingList')}>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-journal-text" fill={option === 'bookingList' ? "#275A53" : "#000"} xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                            <path fillRule="evenodd" d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        <div className="pt-1 pl-2" style={option === 'bookingList' ? activeText : inActiveText}><h6>Booking list</h6></div>
                    </div>

                    <div className="d-flex justify-content-start align-items-center mb-4 mt-4" style={{ cursor: 'pointer' }} onClick={() => setOption('addRentHouse')}>
                        <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-plus" fill={option === 'addRentHouse' ? "#275A53" : "#000"} xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                        <div className="pt-1 pl-2" style={option === 'addRentHouse' ? activeText : inActiveText}><h6>Add Rent House</h6></div>
                    </div>

                    <div className="d-flex justify-content-start align-items-center mb-4 mt-4" style={{ cursor: 'pointer' }} onClick={() => setOption('myRent')}>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-house-door" fill={option === 'myRent' ? "#275A53" : "#000"} xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z" />
                            <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                        </svg>
                        <div className="pt-1 pl-2" style={option === 'myRent' ? activeText : inActiveText}><h6>My Rent</h6></div>
                    </div>

                </div>

                <div className='col-md-10 col-sm-12 p-5'>
                    {
                        option === 'bookingList' ?
                        <BookingList /> : option === 'addRentHouse' ? <AddRentHouse /> : <MyRent />
                    }
                </div>
            </div>
        </section>
    );
};

export default Dashboard;