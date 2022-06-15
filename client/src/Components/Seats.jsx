import React from 'react'
import { NavLink } from "react-router-dom"

const Seats = (props) => {

const seats11=document.querySelector('.seats11')

const {bus_seats}=props.bus;

let seatsArr=[];
let str='';

for(let i=0;i<bus_seats;i++){
str+=`<div className="seat"></div>`;
seatsArr.push(str);
}

// make a new parser
const parser = new DOMParser();

// convert html string into DOM


  return (
    <>
      <div className="seats" id={`id${props.id}`}>
        <div className="seats_info col-md-10 col-12">
          <div className="seats1">
            <div className="seats11">



{seatsArr.map((val,index)=>{
const document = parser.parseFromString(val, "text/html");
return document;
})}

              {/* <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div>
              <div className="seat"></div> */}
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
    </>
  )
}

export default Seats