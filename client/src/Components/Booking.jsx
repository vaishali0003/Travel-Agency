import React from 'react'
import Book from './Book'
import Bus from './Bus'
import Seats from './Seats'
import { useSearchParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
// import { useContext } from 'react'
// import Context from '../context/context'

const Booking = () => {

  // const context = useContext(Context);
  //  const {fetchallbuses}=context;

  const [journey, setjourney] = useState({book_from:"Jaipur",book_to:"Ajmer"})

  const [searchParams, setSearchParams] = useSearchParams();
  const from=searchParams.get("from")
  const to=searchParams.get("to")
  const date=searchParams.get("date")

  // const host = "http://localhost:4300";

    const fetchallbuses = async () => {
      // setjourney({book_from:from,book_to:to})
     const {book_from,book_to}=journey;

        try {
            const response = await fetch(`http://localhost:4300/bus/bookings/${book_from}/${book_to}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            const json = await response.json()
            console.log(json)
        }
        catch(err) {
          console.log(err)
            window.alert('Some internal error occured')
        }
    }

    useEffect(() => {
      fetchallbuses();
    }, [])
    

  // context.fetchallbuses();

  return (
    <>
      <div className="book">
        <Book />
        <div className="busesInfo">
          <h1 className="h1_head">2 buses found</h1>
          <div className="buses col-md-10 col-11">

           <Bus/>
          </div>
          
          <Seats/>
        </div>
      </div>
    </>
  )
}

export default Booking