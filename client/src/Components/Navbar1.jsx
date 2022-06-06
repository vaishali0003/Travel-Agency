import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar1 = () => {
    return (
        <>
            <div className="nav-1">
                <ul className="nav-list">
                    <NavLink to="/"><li className="nav-list-item">Home</li></NavLink>
                    <NavLink to="/tracking"><li className="nav-list-item">Tracking</li></NavLink>
                    <NavLink to="/signup"><li className="nav-list-item" to="/signup">Login/Signin</li></NavLink>
                    <NavLink to="/packages"><li className="nav-list-item">Packages</li></NavLink>
                    <NavLink to="/services"><li className="nav-list-item">Services</li></NavLink>
                    <NavLink to="/testimonials"><li className="nav-list-item">Testimonials</li></NavLink>
                    <NavLink to="/review"><li className="nav-list-item">Review</li></NavLink>
                    <NavLink to="/contact"><li className="nav-list-item">Contact</li></NavLink>
                </ul>
            </div>
        </>
    )
}

export default Navbar1