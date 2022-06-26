import React from 'react'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const BookingConfirm = (props) => {

  const { bus } = props;

  var obj = {
    t_amount: props.amount,
    seats_n: props.tempArr,
    bus_price: bus.bus_price,
    no_buses: props.tempArr.length,
    bus_name: bus.bus_name,
    book_from: bus.book_from,
    book_to: bus.book_to,
    recieve_date: bus.bus_recieve_date,
    drop_date: bus.bus_drop_date,
    bus_time: bus.bus_time,
    bus_drops: bus.bus_drops,
  }

  const [myObj, setmyObj] = useState(obj);


  const onchange=()=>{
    console.log('onchange is clicked');
  }

  useEffect(() => {
    // Object.values gives the values of an object in the form of array;
    // we have to check whether the values of [] is undefined or not

    // whenever we refresh the page useeffect renders and no data is present in myObj as data is coming from previous page

    // so if the value is [] is undefined on refreshing the page as no data is coming  we will not set the localstorage as it will set the value to blank;

    let objVal = Object.values(myObj)

    if (!objVal.includes(undefined)) {
      window.localStorage.setItem('pass_details', JSON.stringify(obj));
    }

    setmyObj(JSON.parse(localStorage.getItem('pass_details')));

    var seats_n = JSON.parse(localStorage.getItem('pass_details')).seats_n;
    if (seats_n) {
      var doc = document.getElementById('pass_sec');
      var str = "";

      for (let i of seats_n) {
        str += `<div className="pass_sec1">
                  <p className="pass_num">Passenger 1</p>
                  <input type="text" class="pIn" placeholder='PASSENGER NAME' name="pass_name" onchange={onchange}/>
                  <input type="text" class="pIn" placeholder='PASSENGER AGE' name="pass_age"/>
                  <div className="pass-gender" style={{ marginTop: "0.6rem" }}>
                    <input type="radio" name="pass_gend" class='pass_gend' />
                    <label htmlFor="female" class='label_gend'>Female</label>
                    <input type="radio" name="pass_gend" class='pass_gend' />
                    <label htmlFor="male" class='label_gend'>Male</label>
                    <input type="radio" name="pass_gend" class='pass_gend' />
                    <label htmlFor="other" class='label_gend'>Others</label>
                  </div>
                  </div>`
      }
      doc.innerHTML = str;
    }

  }, []);


  return (
    <>
      <div className="bookingConfirm">
        <div className="bookingConfirm1 col-md-8">
          <h1 className="h1_head" style={{ textAlign: "center" }}>Booking Confirmation</h1>

          <div className="bookingConfirm11">
            <div className="bookingConfirm11_1">
              <p className="p_detail_h">Passenger Details</p>

              <div className="pass_sec" id="pass_sec">

              </div>
            </div>

            <div className="bookingConfirm11_2">
              <p className="p_detail_h">Sub Total</p>
              <h2 className="bux_box2_price" style={{ fontWeight: "600" }}>{myObj.bus_price}</h2>
              <p className="text_h">{myObj.bus_price}x{myObj.no_buses}</p>
              <p className="p_detail_h">Seats</p>
              <p className="bus_info1_item">{myObj.seats_n}</p>
              <p className="p_detail_h">{myObj.bus_name}</p>
              <p className="text_h">{myObj.book_from} - {myObj.book_to}</p>
              <p className="text_h">{myObj.recieve_date}</p>
              <p className="text_h">{myObj.drop_date}</p>
              <p className="p_detail_h" style={{ borderBottom: "none" }}>{myObj.bus_time}-{myObj.bus_drops}</p>
              <div className="bus_info2_item p_detail_h" style={{ borderBottom: "none" }}><span style={{ fontWeight: "bold" }}>3</span><sub style={{ color: "grey" }}>hrs</sub>0<sub style={{ color: "grey" }}>min</sub></div>
            </div>
          </div>
          <div className="book_conf_btn book_seats">
            {!localStorage.getItem('token') ? <NavLink className="conf_proceed book_seat" to='/signup?booking_conf=true'>Confirm and Submit</NavLink> : <NavLink className="conf_proceed book_seat" to=''>Confirm and Submit</NavLink>}
          </div>
        </div>
      </div>
    </>
  )
}

export default BookingConfirm;