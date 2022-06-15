import React from 'react'
import Book from './Book'
import Bus from './Bus'
import Seats from './Seats'
import { useSearchParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import BusContext from '../context/buses/busContext'

const Booking = () => {

  const context = useContext(BusContext);
  const { fetchallbuses, buses } = context;

  const [searchParams, setSearchParams] = useSearchParams();
  const from = searchParams.get("from")
  const to = searchParams.get("to")
  const date = searchParams.get("date")

  useEffect(() => {
    fetchallbuses(from, to);
  }, [from, to]);

  const onClickBus = (id) => {
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
              return <><Bus key={index} bus={bus} onClickBus={() => { onClickBus(index) }} />
                <Seats bus={bus} id={index} />
              </>
            }) : <h1 className="h1_head">No buses found</h1>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Booking