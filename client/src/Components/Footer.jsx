import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <>
      <div className="footerSection" id="footerSection">
        <div className="col-md-9">
          <div className="footer">
            {/* <div className="col-md-3 d-flex flex-column align-content-center"> */}
            <div className="footerSec">
              <h3 className="footerH">Our Branches</h3>
              <ul className="footList">
                <li className="footLi">
                  <img src="../images/loc.png" alt="" className='footLiImg' />
                  <p className="locName">Punjab</p>
                </li>
                <li className="footLi">
                  <img src="../images/loc.png" alt="" className='footLiImg' />
                  <p className="locName">Delhi</p>
                </li>
                <li className="footLi">
                  <img src="../images/loc.png" alt="" className='footLiImg' />
                  <p className="locName">Jaipur</p>
                </li>
                <li className="footLi">
                  <img src="../images/loc.png" alt="" className='footLiImg' />
                  <p className="locName">Mumbai</p>
                </li>
                <li className="footLi">
                  <img src="../images/loc.png" alt="" className='footLiImg' />
                  <p className="locName">Kolkata</p>
                </li>
              </ul>
              {/* </div> */}
            </div>

            {/* <div className="col-md-3 d-flex flex-column align-content-center"> */}
            <div className="footerSec">
              <h3 className="footerH">Quick Links</h3>
              <ul className="footList">
                <li className="footLi">
                  <img src="../images/arrow.png" alt="" className='footLiImg' />
                  <p className="locName"><NavHashLink to="/#homeSection" className="loca">Home</NavHashLink></p>
                </li>
                <li className="footLi">
                  <img src="../images/arrow.png" alt="" className='footLiImg' />
                  <p className="locName"><NavHashLink to="/#tracking" className="loca">Tracking</NavHashLink></p>
                </li>
                <li className="footLi">
                  <img src="../images/arrow.png" alt="" className='footLiImg' />
                  <p className="locName"><NavHashLink to="/#signup" className="loca">Login/Signin</NavHashLink></p>
                </li>
                <li className="footLi">
                  <img src="../images/arrow.png" alt="" className='footLiImg' />
                  <p className="locName"><NavHashLink to="/#packagesSection" className="loca">Packages</NavHashLink></p>
                </li>
                <li className="footLi">
                  <img src="../images/arrow.png" alt="" className='footLiImg' />
                  <p className="locName"><NavHashLink to="/#servicesSection" className="loca">Services</NavHashLink></p>
                </li>
                <li className="footLi">
                  <img src="../images/arrow.png" alt="" className='footLiImg' />
                  <p className="locName"><NavHashLink to="/#testimonialsSection" className="loca">Testimonials</NavHashLink></p>
                </li>
                <li className="footLi">
                  <img src="../images/arrow.png" alt="" className='footLiImg' />
                 <p className="locName"><NavHashLink to="/#reviewsSection" className="loca">Reviews</NavHashLink></p>
                </li>
                <li className="footLi">
                  <img src="../images/arrow.png" alt="" className='footLiImg' />
                  <p className="locName"><NavHashLink to="/#contactSection" className="loca">Contact</NavHashLink></p>
                </li>
              </ul>
            </div>
            {/* </div> */}

            {/* <div className="col-md-3 d-flex flex-column align-content-center"> */}
            <div className="footerSec">
              <h3 className="footerH">Contact Info</h3>
              <ul className="footList">
                <li className="footLi">
                  <img src="../images/phone.png" alt="" className='footLiImg' />
                  <p className="locName">+123-456-789</p>
                </li>
                <li className="footLi">
                  <img src="../images/phone.png" alt="" className='footLiImg' />
                  <p className="locName">+123-456-789</p>
                </li>
                <li className="footLi">
                  <img src="../images/email.png" alt="" className='footLiImg' />
                  <p className="locName">easemytrip12@gmail.com</p>
                </li>
                <li className="footLi">
                  <img src="../images/loc.png" alt="" className='footLiImg' />
                  <p className="locName">Sagar,(M.P)-470001</p>
                </li>
              </ul>
            </div>
            {/* </div> */}


            {/* <div className="col-md-3 d-flex flex-column align-content-center"> */}
            <div className="footerSec">
              <h3 className="footerH">Follow Us</h3>
              <ul className="footList">
                <li className="footLi">
                  <img src="../images/fb1.png" alt="" className='footLiImg' />
                  <p className="locName">Facebook</p>
                </li>
                <li className="footLi">
                  <img src="../images/ig1.png" alt="" className='footLiImg' />
                  <p className="locName">Instagram</p>
                </li>
                <li className="footLi">
                  <img src="../images/twitter1.png" alt="" className='footLiImg' />
                  <p className="locName">Twitter</p>
                </li>
                <li className="footLi">
                  <img src="../images/linkedin1.png" alt="" className='footLiImg' />
                  <p className="locName">LinkedIn</p>
                </li>
              </ul>
              </div>
            {/* </div> */}

          </div>
        </div>
      </div>
    </>
  )
}

export default Footer