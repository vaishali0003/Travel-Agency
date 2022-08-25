import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Packages from './Packages'
import Services from './Services'
import Testimonials from './Testimonials'
import Reviews2 from './Reviews2'
import Contact from './Contact'
import Footer from './Footer'

const MainHome = (props) => {
  return (
    <>
        <Home/>
        <Packages />
        <Services />
        <Testimonials />
        <Reviews2 />
        <Contact showAlert={props.showAlert}/>
        <Footer />
    </>
  )
}

export default MainHome