import React from 'react'
import Book from './Book'

const Booking = () => {
  return (
    <>
      <div className="book">
        <Book />
        <div className="busesInfo">
          <h1 className="no_of_buses">2 buses found</h1>
          <div className="buses col-md-10">
            <div className="busBox">
              <div className="busBox1 col-md-9">
                <h3 className="bus_name">Bus 21</h3>
                <ul className="bus_info1">
                  <li className="bus_info1_item">Sleeper Non/AC</li>
                  <li className="bus_info1_item">20 seats</li>
                  <li className="bus_info1_item">15 windows</li>
                </ul>
              </div>
              <div className="busBox2 col-md-3"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Booking