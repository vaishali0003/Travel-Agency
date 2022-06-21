import React, { Fragment } from 'react'
import Book from './Book'
import Bus from './Bus'
import Seats from './Seats'
import { useSearchParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import BusContext from '../context/buses/busContext'
import { useState } from 'react'

const Booking = () => {

  const context = useContext(BusContext);
  const { fetchallbuses, buses } = context;

  const [searchParams, setSearchParams] = useSearchParams();
  const from = searchParams.get("from")
  const to = searchParams.get("to")
  const date = searchParams.get("date")
  const [busNo, setBusNo] = useState(null);
  const [tempStr, setTempStr] = useState([]);
  // const [tempArr, settempArr] = useState([])
  var tempArr=[];


  useEffect(() => {
    fetchallbuses(from, to);
  }, [from, to]);

  // useEffect(() => {
  //   console.log('yes');
  //   settempArr([]);
  //   var seats11 = document.getElementById(`seats${busNo}`);
  //   if (seats11) {
  //     for (let i of seats11.children) {
  //       if (i.classList.contains('vacant_seat')) {
  //         i.addEventListener('click', (e) => {
  //           console.log('clicked');
  //           e.target.className = 'selected_seat';
  //           var seat_no = e.target.id.split('seat')[1];
  //           const n_seats_selected = document.getElementById(`n_seats_selected${busNo}`);
  //           if (n_seats_selected) {
  //             var n_seat = document.createElement('span');
  //             n_seat.className = 'n_seat';
  //             n_seat.innerText = `UD-${seat_no}`;
  //             n_seats_selected.appendChild(n_seat);
  //             var seat_param = `UD-${seat_no}`;
  //             settempArr([tempArr.push(seat_param)]);
  //           }
  //         });
  //       }
  //     }
  //   }
  // }, [tempStr]);

  // const onClickBus = (id) => {
  //   setBusNo(id);
  //   console.log(tempStr);
  //   if (!tempStr.includes(id)) {
  //     setTempStr(tempStr.concat(id));
  //   }
  //   let seats = document.querySelectorAll('.seats');
  //   let id2 = 'id' + id;
  //   for (let i of seats) {
  //     let id1 = i.getAttribute('id');
  //     if (id1 === id2) {
  //       i.style.display = 'flex'
  //     }
  //   }
  // }



  // MY CODE

  useEffect(() => {
    let seats11 = document.getElementById(`seats${busNo}`);
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
              // settempArr(tempArr.splice(i, 1));
              tempArr.splice(i,1)
            }
            else {
              e.target.className = 'selected_seat';
              if (n_seats_selected) {
                var n_seat = document.createElement('span');
                n_seat.setAttribute('id', `n_seat${seat_no}`);
                n_seat.className = 'n_seat';
                n_seat.innerText = `UD-${seat_no}`;
                n_seats_selected.appendChild(n_seat);
                // settempArr(tempArr.push(seat_param));
                tempArr.push(seat_param);
              }
            }
          })
        }
      }
    }
  }, [tempStr])


  const onClick = () => {
    console.log(tempArr);
  }

  const onClickBus = (id) => {
    setBusNo(id);

    if (!tempStr.includes(id)) {
      setTempStr(tempStr.concat(id));
    }

    let seats = document.querySelectorAll('.seats');
    let id2 = 'id' + id;
    for (let i of seats) {
      let id1 = i.getAttribute('id');
      if (id1 === id2) {
        i.style.display = 'flex'
      }
    }
  }


  return (
    <>
      <div className="book">
        <Book />
        <div className="busesInfo">
          <div className="buses col-md-10 col-11">
            {(buses.length !== 0) ? buses.map((bus, index) => {
              return <React.Fragment key={index}><Bus bus={bus} onClickBus={() => { onClickBus(index) }} />
                <Seats bus={bus} id={index} tempArr={tempArr}/>
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