import React, { Fragment, useMemo } from 'react'
import Book from './Book'
import Bus from './Bus'
import Seats from './Seats'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import BusContext from '../context/buses/busContext'
import { useState } from 'react'

// var tempArr = [];
var amount = 0;

const Booking = (props) => {

  const navigate = useNavigate();

  var tempArr = useMemo(() => [], []);

  const context = useContext(BusContext);
  const { fetchallbuses, buses } = context;

  const [searchParams, setSearchParams] = useSearchParams();
  const from = searchParams.get("from")
  const to = searchParams.get("to")
  const date = searchParams.get("date")
  const [busNo, setBusNo] = useState(null);
  const [tempStr, setTempStr] = useState([]);

  useEffect(() => {
    fetchallbuses(from, to);
  }, [from, to]);


  // MY CODE

  useEffect(() => {
    tempArr = [];
    var seats11 = document.getElementById(`seats${busNo}`);
    var bus1 = context.buses[busNo];
    if (bus1) {
      props.setbus(bus1);
      var bus_p = context.buses[busNo].bus_price
    }
    if (seats11) {
      for (let i of seats11.children) {
        if (i.classList.contains('vacant_seat')) {
          i.addEventListener('click', (e) => {
            var seat_no = e.target.id.split('seat')[1];
            var n_seats_selected = document.getElementById(`n_seats_selected${busNo}`);
            var seat_param = `UD-${seat_no}`;

            if (e.target.classList.contains('selected_seat')) {
              e.target.classList.remove('selected_seat');
              e.target.className = 'vacant_seat';
              var r_seat = document.getElementById(`n_seat${seat_no}`);
              r_seat.remove();
              let i = tempArr.indexOf(seat_param);
              tempArr.splice(i, 1);
              console.log(tempArr);
              props.setTempArr(tempArr);
              amount -= bus_p;
            }
            else {
              e.target.className = 'selected_seat';
              if (n_seats_selected) {
                var n_seat = document.createElement('span');
                n_seat.setAttribute('id', `n_seat${seat_no}`);
                n_seat.className = 'n_seat';
                n_seat.innerText = `UD-${seat_no}`;
                n_seats_selected.appendChild(n_seat);
                tempArr.push(seat_param);
                props.setTempArr(tempArr);
                console.log(tempArr);
                amount += bus_p;
                props.setamount(amount);
              }
            }
          })
        }
      }
    }
  }, [tempStr])



  const onClickBus = (id) => {
    tempArr = [];
    props.setTempArr(tempArr);
    amount = 0;

    var b = document.getElementById(`seats${id}`);
    if (b) {
      let ss = document.querySelectorAll('.selected_seat');
      if (ss) {
        for (let i of ss) {
          let id_s = i.getAttribute('id')
          let id_split = id_s.split('seat')[1];
          let span = document.getElementById(`n_seat${id_split}`);
          span.remove();

          i.classList.remove('selected_seat');
          i.className = 'vacant_seat'
        }
      }
    }


    setBusNo(id);
    if (!tempStr.includes(id)) {
      setTempStr(tempStr.concat(id));
    }

    // dt

    let seats = document.querySelectorAll('.seats');
    let id2 = 'id' + id;
    for (let i of seats) {
      let id1 = i.getAttribute('id');
      if (id1 === id2) {
        i.style.display = 'flex'
      }
    }
  }


  const onClickBook = (index) => {
    var arr = [];
    let cd = document.getElementById(`seats${index}`);
    let m = cd.childNodes;
    console.log(m);

    for (let i of m) {
      arr.push(i.className)
    }
    if (arr.includes('selected_seat')) {
      navigate('/booking-confirm');
    } else {
      window.alert('select the seat')
    }
  }


  return (
    <>
      <div className="book">
        <Book />
        {/* <button onClick={onClick}>sdf</button> */}
        <div className="busesInfo">
          <div className="buses col-md-10 col-11">
            {(buses.length !== 0) ? buses.map((bus, index) => {
              return <React.Fragment key={index}><Bus bus={bus} onClickBus={() => { onClickBus(index) }} time={props.time} settime={props.settime} />
                <Seats bus={bus} id={index} onClickBook={() => { onClickBook(index) }} />
              </React.Fragment>
            }) : <h1 className="h1_head">No buses found</h1>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Booking