import React from 'react'
import { useEffect } from 'react';
import { NavLink } from "react-router-dom"
import OutsideClickHandler from 'react-outside-click-handler';
// react select

const Seats = (props) => {
  const { bus_seats, booked_seats } = props.bus;

  useEffect(() => {
    // console.log(booked_seats);
    let tempArr=[];
    for(let i of booked_seats.split(','))
    {
      tempArr.push(i);
    }
    console.log(tempArr);
    var seats11 = document.getElementById(`seats${props.id}`);
    if(seats11)
    {
      for(let i=1;i<=bus_seats;i++)
      {
        let nc=document.createElement('div');
        nc.setAttribute('id',`seat${i}`);
        console.log(i);
        if(tempArr.includes(i.toString()))
        {
          console.log('if');
          nc.className='booked_seat';
        }
        else
        {
          nc.className='vacant_seat';
        }
        seats11.appendChild(nc);
      }
    }
    // for (let i = 1; i <= bus_seats; i++) {
    //   var seats11 = document.getElementById(`seats${props.id}`);
    //   var seat = document.createElement('div');
    //   if (seats11 !== null) {
    //     seats11.appendChild(seat);
    //     seat.setAttribute('id', `seat${i}`);
    //     const b_s = booked_seats.split(',');
    //     for (let i of b_s) {
    //       let seat_id = seat.getAttribute('id');
    //       if (seat_id === `seat${i}`) {
    //         seat.classList.add('booked_seat');
    //       }
    //       else {
    //         seat.classList.add('vacant_seat');
    //       }
    //     }
    //   }
    // }

  
  }, [bus_seats])




  // window.addEventListener('mouseup', (e) => {
  //   if (!document.querySelector('.seats').contains(e.target)) {
  //     document.querySelector('.seats').style.display = 'none';
  //   }
  // })



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