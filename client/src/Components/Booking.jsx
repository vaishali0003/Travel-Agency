import React from 'react'
import Book from './Book'
import Bus from './Bus'
import Seats from './Seats'
import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import BusContext from '../context/buses/busContext'

const Booking = () => {

  const context = useContext(BusContext);
  const { fetchallbuses, buses } = context;

  const [journey, setjourney] = useState({ book_from: "Jaipur", book_to: "Ajmer" })

  // const [searchParams, setSearchParams] = useSearchParams();
  // const from = searchParams.get("from")
  // const to = searchParams.get("to")
  // const date = searchParams.get("date")

  const { book_from, book_to } = journey;

  useEffect(() => {
    fetchallbuses(book_from, book_to);
  }, [])


  return (
    <>
      <div className="book">
        <Book />
        <div className="busesInfo">
          <h1 className="h1_head">2 buses found</h1>
          <div className="buses col-md-10 col-11">

            {(buses.length !== 0) ? buses.map((bus, index) => {
              return <Bus key={index} bus={bus}/>
            }) : 'No buses found'}

          </div>

          <Seats />
        </div>
      </div>
    </>
  )
}

export default Booking