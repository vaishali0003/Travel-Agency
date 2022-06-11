import React from 'react'
import { NavLink } from 'react-router-dom'

const BookingConfirm = () => {
  return (
    <>
      <div className="bookingConfirm">
        <div className="bookingConfirm1 col-md-8">
          <h1 className="h1_head" style={{ textAlign: "center" }}>Booking Confirmation</h1>

          <div className="bookingConfirm11">
            <div className="bookingConfirm11_1">
              <p className="p_detail_h">Passenger Details</p>

              <div className="pass_sec">
                <p className="pass_num">Passenger 1</p>
                <input type="text" className="pIn" placeholder='PASSENGER NAME' />
                <input type="text" className="pIn" placeholder='PASSENGER AGE' />

                <div className="pass-gender" style={{ marginTop: "0.6rem" }}>
                  <input type="radio" name="pass_gend" className='pass_gend' />
                  <label htmlFor="female" className='label_gend'>Female</label>
                  <input type="radio" name="pass_gend" className='pass_gend' />
                  <label htmlFor="male" className='label_gend'>Male</label>
                  <input type="radio" name="pass_gend" className='pass_gend' />
                  <label htmlFor="other" className='label_gend'>Others</label>
                </div>
                <hr />
              </div>

              <div className="pass_sec">
                <p className="pass_num">Passenger 1</p>
                <input type="text" className="pIn" placeholder='PASSENGER NAME' />
                <input type="text" className="pIn" placeholder='PASSENGER AGE' />

                <div className="pass-gender" style={{ marginTop: "0.6rem" }}>
                  <input type="radio" name="pass_gend" className='pass_gend' />
                  <label htmlFor="female" className='label_gend'>Female</label>
                  <input type="radio" name="pass_gend" className='pass_gend' />
                  <label htmlFor="male" className='label_gend'>Male</label>
                  <input type="radio" name="pass_gend" className='pass_gend' />
                  <label htmlFor="other" className='label_gend'>Others</label>
                </div>
              </div>

            </div>

            <div className="bookingConfirm11_2">
              <p className="p_detail_h">Sub Total</p>
              <h2 className="bux_box2_price" style={{ fontWeight: "600" }}>398$</h2>
              <p className="text_h">199x2</p>
              <p className="p_detail_h">Seats</p>
              <p className="bus_info1_item">UD-17,UD-18</p>
              <p className="p_detail_h">Bus 21</p>
              <p className="text_h">Jaipur - Ajmer</p>
              <p className="text_h">15NOV</p>
              <p className="p_detail_h" style={{ borderBottom: "none" }}>8:00-11:00</p>
              <div className="bus_info2_item p_detail_h" style={{ borderBottom: "none" }}><span style={{ fontWeight: "bold" }}>3</span><sub style={{ color: "grey" }}>hrs</sub>0<sub style={{ color: "grey" }}>min</sub></div>
            </div>
          </div>
          <div className="book_conf_btn book_seats">
            <NavLink className="conf_proceed book_seat" to='/booking-confirmed'>Confirm and Submit</NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default BookingConfirm