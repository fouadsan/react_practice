import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navcenter">
                <ul className="nav-links">
                    <li>
                        <Link to="/">
                            home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            about
                        </Link>
                    </li>
                </ul>
               
            </div>
        </nav>
    );
}

export default Navbar