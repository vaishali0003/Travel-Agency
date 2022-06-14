import React from 'react'
// import { NavHashLink } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link';

const Navbar1 = () => {
    return (
        <>
            <div className="nav-1">
                <ul className="nav-list">
                    <li className="nav-list-item"><NavHashLink to="/#homeSection">Home</NavHashLink></li>
                    <li className="nav-list-item"><NavHashLink to="/#tracking">Tracking</NavHashLink></li>
                    <li className="nav-list-item"><NavHashLink to="/#signup">Login/Signin</NavHashLink></li>
                    <li className="nav-list-item"><NavHashLink to="/#packagesSection">Packages</NavHashLink></li>
                    <li className="nav-list-item"><NavHashLink to="/#servicesSection">Services</NavHashLink></li>
                    <li className="nav-list-item"><NavHashLink to="/#testimonialsSection">Testimonials</NavHashLink></li>
                    <li className="nav-list-item"><NavHashLink to="/#reviewsSection">Review</NavHashLink></li>
                    <li className="nav-list-item"><NavHashLink to="/#contact">Contact</NavHashLink></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar1;