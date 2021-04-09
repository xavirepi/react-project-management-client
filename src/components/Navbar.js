import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="navbar navbar-dark bg-dark mb-3">
            <div className="container d-flex justify-content-center">
                <Link to="/projects" className="text-white">Projects</Link>
            </div>
        </nav>
    )
}

export default Navbar;