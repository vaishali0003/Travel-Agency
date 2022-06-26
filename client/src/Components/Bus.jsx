import React, { useState,useEffect } from 'react'

const Bus = (props) => {

  const { bus } = props

  const [flag, setflag] = useState(true);

  const onClick = (props) => {

    const policies_list = document.querySelector('.policies_list');

    if (flag) {
      policies_list.style.display = 'flex';
      setflag(!flag);
    }
    else {
      policies_list.style.display = 'none';
      setflag(!flag);
    }
  }


  let start_time = bus.bus_time;
  let end_time = bus.bus_drops;

  const getTimeZone = (start_time, end_time) => {
    var t1_arr = start_time.split(':');
    var t2_arr = end_time.split(":");

    var t_d = parseInt(t2_arr[0]) - parseInt(t1_arr[0])

    if (t_d < 0) {
      t2_arr[0] = parseInt(t2_arr[0]) + 24;
    }

    var t1 = parseInt(t1_arr[0] * 60) + parseInt(t1_arr[1])
    var t2 = parseInt(t2_arr[0] * 60) + parseInt(t2_arr[1])

    var tt = t2 - t1
    var tth = Math.floor(tt / 60);
    var ttm = Math.floor(tt % 60);

    return [tth, ttm];
  }

  let ttt = getTimeZone(start_time, end_time);

  var tt_h = ttt[0];
  var tt_m = ttt[1];

  
  return (
    <>
      <div className="busBox">
        <div className="busBox1 col-md-10">
          <h3 className="bus_name">{bus.bus_name}</h3>
          <ul className="bus_info1">
            <li className="bus_info1_item">{bus.bus_type}</li>
            <li className="bus_info1_item">{bus.bus_seats} seats</li>
            <li className="bus_info1_item">{bus.bus_window} window seats</li>
          </ul>
          <hr />
          <ul className="bus_info2">
            <li className="bus_info2_item"><span style={{ fontWeight: "bold" }}>{bus.bus_time}, </span><span style={{ color: "grey" }}>{bus.bus_recieve_date}</span></li>
            <li className="bus_info2_item"><span style={{ fontWeight: "bold" }} className="hr">{tt_h}</span><sub style={{ color: "grey" }}>hrs</sub><span style={{ fontWeight: "bold" }} className="min">{tt_m}</span><sub style={{ color: "grey" }}>min</sub></li>
            <li className="bus_info2_item"><span style={{ fontWeight: "bold" }}>{bus.bus_drops},</span><span style={{ color: "grey" }}>{bus.bus_drop_date}</span></li>
          </ul>
          <hr />
          <div className="policies">
            <p className="poli_head" onClick={onClick}>Policies</p>

            <ul className="policies_list">

              <li className="policy">
                <p className="policy_head">CANCELLATION</p>
                <ul className="policy_list">
                  <li className="policy_list_item">Lorem ipsum dolor sit amet consectetur.</li>
                  <li className="policy_list_item">Lorem ipsum dolor sit amet consectetur.</li>
                </ul>
              </li>

              <li className="policy">
                <p className="policy_head"> CHILD PASSENGER</p>
                <ul className="policy_list">
                  <li className="policy_list_item">Lorem ipsum dolor sit amet consectetur.</li>
                  <li className="policy_list_item">Lorem ipsum dolor sit amet consectetur.</li>
                </ul>
              </li>

              <li className="policy">
                <p className="policy_head">LUGGUAGE</p>
                <ul className="policy_list">
                  <li className="policy_list_item">Lorem ipsum dolor sit amet consectetur.</li>
                  <li className="policy_list_item">Lorem ipsum dolor sit amet consectetur.</li>
                </ul>
              </li>

              <li className="policy">
                <p className="policy_head">PETS</p>
                <ul className="policy_list">
                  <li className="policy_list_item">Lorem ipsum dolor sit amet consectetur.</li>
                  <li className="policy_list_item">Lorem ipsum dolor sit amet consectetur.</li>
                </ul>
              </li>

              <li className="policy">
                <p className="policy_head">LIQUOR</p>
                <ul className="policy_list">
                  <li className="policy_list_item">Lorem ipsum dolor sit amet consectetur.</li>
                  <li className="policy_list_item">Lorem ipsum dolor sit amet consectetur.</li>
                </ul>
              </li>

              <li className="policy">
                <p className="policy_head">PICKUP TIME</p>
                <ul className="policy_list">
                  <li className="policy_list_item">Lorem ipsum dolor sit amet consectetur.</li>
                  <li className="policy_list_item">Lorem ipsum dolor sit amet consectetur.</li>
                </ul>
              </li>

            </ul>
          </div>
        </div>
        <div className="busBox2 col-md-2">
          <p className="bus_info2_i" style={{ color: 'grey' }}>Starting From</p>
          <h2 className="bus_box2_price" style={{ fontWeight: "bold" }}>
            {bus.bus_price}
          </h2>
          <button className="select_seats" onClick={props.onClickBus}>SELECT SEATS</button>
        </div>
      </div>
    </>
  )
}

export default Bus;