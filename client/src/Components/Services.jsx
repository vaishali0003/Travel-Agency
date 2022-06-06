import React from 'react'
import Service from './Service'

const Services = () => {
  return (
    <>
    <div className="servicesSection">
    <h1 className="head">Our Services</h1>
        <div className="col-md-11">
        <div className="services row">
            <Service img={'../images/hotel.png'} num='01' title='Affordable Hotels'/>
            <Service img={'../images/airplane.png'} num='02' title='Fastest Travel'/>
            <Service img={'../images/food.png'} num='03' title='Food And Drinks'/>
            <Service img={'../images/world.png'} num='04' title='Around The World'/>
            <Service img={'../images/adventure.png'} num='05' title='New Adventures'/>
            <Service img={'../images/speaker.png'} num='06' title='Safety Guides'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Services