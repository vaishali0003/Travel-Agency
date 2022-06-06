import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Packages from './Packages'
import Services from './Services'
import Testimonials from './Testimonials'
import Review from './Review'
import Contact from './Contact'
import Footer from './Footer'

const MainHome = () => {
  return (
    <>
        <Home />
        <Packages />
        <Services />
        <Testimonials />
        <Review />
        <Contact />
        <Footer />

        {/* <Route path='/' element={<Home/>}/>
        <Route path='/packages' element={<Packages/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/testimonials' element={<Testimonials/>}/>
        <Route path='/review' element={<Review/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/footer' element={<Footer/>}/> */}

    </>
  )
}

export default MainHome