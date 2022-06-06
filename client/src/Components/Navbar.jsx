import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Navbar = (props) => {

    const location = useLocation();

    const showNav = () => {

        console.log('showNav is clicked')

        let nav = document.querySelector('.nav-1');
        if (nav !== null) {
            if (nav.style.display === 'block') {
                nav.style.display = 'none';
            }
            else {
                nav.style.display = 'block';
            }
        }
    }

    const showSignUp = () => {

        console.log('showSignup is clicked')

        let loginBox = document.querySelector('.loginBox');
        if (loginBox !== null) {
            if (loginBox.style.display === 'block') {
                loginBox.style.display = 'none'
            }
            else {
                loginBox.style.display = 'block'
            }
        }
    }


    const themeChanger = () => {
        if (localStorage.getItem('mode') === 'darkMode') {
            props.darkMode();
        }
        else {
            props.lightMode()
        }
    }


    useEffect(() => {
        themeChanger();
    }, [location.pathname])


    const toggleTheme = () => {
        if (localStorage.getItem('mode') === 'lightMode') {
            props.darkMode();
        }
        else {
            props.lightMode()
        }
    }


    return (
        <>
            <nav className="navBar d-flex justify-content-center">
                <div className="col-md-11">
                    <div className="row">
                        <div className="left col-md-3">
                            <div className="logo">
                                <img src="../images/logo.png" alt="img" />
                            </div>
                            <div className="logoHeading">
                                <h2 style={{ fontWeight: "600" }}>Travel</h2>
                            </div>
                        </div>
                        <div className="middle col-md-6">
                            <div className="searchBar">
                                <img src="../images/search.svg" className="searchIcon" alt="search" />
                                <input type="search" name="search" id="search" placeholder='Search here' />
                            </div>
                        </div>
                        <div className="right col-md-3 d-flex justify-content-center">
                            <div className="right_list_item_img" onClick={toggleTheme}>

                                <img src="../images/moon.svg" alt="moon" id="themeLogo" />

                            </div>
                            <div className="right_list_item_img" onClick={showSignUp} >
                                <img src="../images/user.svg" alt="user" />
                            </div>
                            <div className="right_list_item_img" onClick={showNav} >
                                <img src="../images/hamBurger.svg" alt="hamburger" style={{ width: "1.45rem" }} id="hamNav" />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar