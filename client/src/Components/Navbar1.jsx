import React from 'react'
import { NavHashLink } from 'react-router-hash-link';
import OutsideClickHandler from 'react-outside-click-handler';


const Navbar1 = () => {
    return (
        <>
        <OutsideClickHandler
        onOutsideClick={(e) => {
          const nav1 = document.querySelector('.nav-1')
            if (!nav1.contains(e.target)) {
              nav1.style.display = 'none';
            }
        }}
      >
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
            </OutsideClickHandler>
        </>
    )
}

export default Navbar1;