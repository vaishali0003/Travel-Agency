import React, { useMemo } from 'react'
import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom"
import OutsideClickHandler from 'react-outside-click-handler';
// react select

const Seats = (props) => {
  const { bus_seats, booked_seats } = props.bus;

  useEffect(() => {
    console.log('yes');
    var b_s = booked_seats.split(',')
    var seats11 = document.getElementById(`seats${props.id}`)
    if (seats11) {
      for (let i = 1; i <= bus_seats; i++) {
        var nc = document.createElement('div');
        nc.setAttribute('id', `seat${i}`);

        if (b_s.includes(i.toString())) {
          nc.className = 'booked_seat'
        }
        else {
          nc.className = 'vacant_seat'
        }
        seats11.appendChild(nc);
      }
    }
  }, []);



  return (
    <>
      <OutsideClickHandler
        onOutsideClick={(e) => {
          const seats = document.querySelectorAll('.seats')
          for (let i of seats) {
            if (!i.contains(e.target)) {
              i.style.display = 'none';
            }
          }
        }}
      >
        <div className="seats" id={`id${props.id}`}>
          <div className="seats_info col-md-10 col-12">
            <div className="seats1">
              <div className="seats11" id={`seats${props.id}`}>

              </div>
              <div className="redBox">
                <div className="booked_seat"></div>
                <p className="bus_info1_item" style={{ fontWeight: "bold", marginLeft: "0.6rem" }}>Already Booked</p>
              </div>

              <div className="seats_selected_info">
                <div className="s_info1">
                  <p className="bus_info1_item" style={{ fontWeight: "bold" }}>Seats Selected</p>
                  <div className="n_seats_selected" id={`n_seats_selected${props.id}`}>

                  </div>
                  <p className="warn" style={{ color: "red", marginBottom: "4px" }}>Can only select maximum of 4 seats at a time</p>
                </div>

                <h3 style={{ fontWeight: "bold" }}>$ 0</h3>
              </div>
              <div className="book_seats">

                {/* <NavLink className='book_seat' to={`/booking-confirm`}>Book Seats</NavLink> */}

                {/* <NavLink className='book_seat' onClick={props.onClickBook} to={`/booking-confirm`}>Book Seats</NavLink> */}
                <button className='book_seat' onClick={props.onClickBook}>Book Seats</button>
              </div>
            </div>
          </div>
        </div>
      </OutsideClickHandler>
    </>
  )
}

export default Seats;