import React from 'react'
import Book from './Book'
import Bus from './Bus'
import Seats from './Seats'

const Booking = () => {
  return (
    <>
      <div className="book">
        <Book />
        <div className="busesInfo">
          <h1 className="no_of_buses">2 buses found</h1>
          <div className="buses col-md-10 col-11">

           <Bus/>
          </div>
          
          <Seats/>
        </div>
      </div>
    </>
  )
}

export default Booking