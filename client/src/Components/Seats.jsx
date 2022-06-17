import React from 'react'
import { useEffect } from 'react';
import { NavLink } from "react-router-dom"
import OutsideClickHandler from 'react-outside-click-handler';


const Seats = (props) => {
  const { bus_seats } = props.bus;
  const id = props.id;

  useEffect(() => {
    for (let i = 0; i < bus_seats; i++) {
      var seats11 = document.getElementById(`seats${props.id}`);
      var seat = document.createElement('div');
      seat.classList.add('seat');
      if (seats11 !== null) {
        seats11.appendChild(seat)
      }
    }
  }, [bus_seats])


  // window.addEventListener('mouseup', (e) => {
  //   if (!document.querySelector('.seats').contains(e.target)) {
  //     document.querySelector('.seats').style.display = 'none';
  //   }
  // })


function MyComponent() {
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        alert('You clicked outside of this component!!!');
      }}
    >
      Hello World
    </OutsideClickHandler>
  );
}


  return (
    <>
    <OutsideClickHandler
      onOutsideClick={(e) => {
        const seats= document.querySelectorAll('.seats')
        for(let i of seats){
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
              <div className="seat"></div>
              <p className="bus_info1_item" style={{ fontWeight: "bold", marginLeft: "0.6rem" }}>Already Booked</p>
            </div>

            <div className="seats_selected_info">
              <div className="s_info1">
                <p className="bus_info1_item" style={{ fontWeight: "bold" }}>Seats Selected</p>
                <p className="bus_info1_item" style={{ margin: "0.2rem 0" }}>UD-17 UD-18</p>
              </div>

              <h3 style={{ fontWeight: "bold" }}>$ 0</h3>
            </div>

            <div className="book_seats">
              <NavLink className='book_seat' to="/booking-confirm">Book Seats</NavLink>
            </div>

          </div>
        </div>
      </div>
    </OutsideClickHandler>

    </>
  )
}

export default Seats