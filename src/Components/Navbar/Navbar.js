import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import brand from '../../logos/Logo.png';
import { authConfig, signOut } from '../Authentication/authManager';

const Navbar = () => {
    const [loggedinUser, setLoggedinUser] = useContext(userContext);

    const handleLogOut = () => {
        authConfig()
        setLoggedinUser({});
        signOut();
        sessionStorage.setItem('user', JSON.stringify({}));
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-transparent bg-transparent mw-100">
            <div>
                <img className="navbar-brand img-fluid" src={brand} style={{ width: "30%" }} />
                <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item mr-4">
                        <a className="nav-link text-brand" href="#services">Services <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item mr-4">
                        <a className="nav-link text-brand" href="#portfolio">Out Portfolio</a>
                    </li>
                    <li className="nav-item mr-4">
                        <a className="nav-link text-brand" href="#contact">Contact us</a>
                    </li>
                    {/* {
                        loggedinUser.isAdmin === false ?
                            <li className="nav-item mr-4">
                                <Link className="nav-link text-brand" to="/customer/serviceList">Dashboard</Link>
                            </li> : 
                            loggedinUser.isAdmin === true ?
                            <li className="nav-item mr-4">
                                <Link className="nav-link text-brand" to="/admin/serviceList">Admin Dashboard</Link>
                            </li> :
                            <Link to="/login"></Link>
                    } */}
                    <li className="nav-item mr-4">
                        {
                            loggedinUser.loggedIn === true &&
                            <Link className="nav-link text-brand" to="/dashboard">Dashboard</Link>
                        }
                    </li>
                    <li className="nav-item mr-4">
                        {
                            loggedinUser.loggedIn === true ?
                                <button className="btn-brand" onClick={handleLogOut}>Log Out</button> :
                                <Link to="/login">
                                    <button className="btn-brand">Log In</button>
                                </Link>

                        }
                    </li>
                </ul>
            </div>

        </nav>
    );
};

export default Navbar;