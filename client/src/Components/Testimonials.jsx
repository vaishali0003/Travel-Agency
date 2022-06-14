import React from 'react'
import Testimonial from './Testimonial'

const Testimonials = () => {
  return (
    <>
    <div className="testimonialsSection" id="testimonialsSection">
        <h1 className="head">THE NUMBERS ARE GROWING</h1>
        <div className="col-md-9">
        <div className="testimonials row">
            <Testimonial title='CUSTOMERS' num='36 M'/>
            <Testimonial title='OPERATORS' num='3500'/>
            <Testimonial title='BUS TICKETS' num='220+ M'/>
        </div>
        </div>
    </div>
    </>
  )
}

export default Testimonials