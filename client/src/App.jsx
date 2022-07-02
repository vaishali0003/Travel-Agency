import React, { useState, useEffect } from 'react'
import SignUp from './Components/SignUp'
import { Route, Routes } from 'react-router-dom'
import MainHome from './Components/MainHome'
import Tracking from './Components/Tracking'
import Login from './Components/Login'
import Navbar1 from './Components/Navbar1'
import Alert from './Components/Alert'
import Theme from './Components/Theme'
import AOS from 'aos';
import Booking from './Components/Booking'
import BookingConfirm from './Components/Bookingconfirm'
import BusState from './context/buses/BusState'

const App = () => {

  AOS.init();

  useEffect(() => {
    AOS.init({
      duration: 500
    });
  }, []);


  const [alert, setalert] = useState(null)

  const showAlert = (message, type) => {
    setalert({
      message: message,
      type: type
    })

    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  const [tempArr, setTempArr] = useState([]);
  const [amount, setamount] = useState([]);
  const [bus, setbus] = useState([]);
  const [busindex, setbusindex] = useState(0);

  return (
    <>
      <BusState>
        <Theme />
        <div className="main">
          <Alert alert={alert} />
          <Navbar1 showAlert={showAlert} />
          <Login showAlert={showAlert} />
          <Routes>
            <Route path='/' element={<MainHome showAlert={showAlert} />} />
            <Route path='/signup' element={<SignUp showAlert={showAlert} />} />
            <Route path='/tracking' element={<Tracking />} />
            <Route path='/booking' element={<Booking tempArr={tempArr} setTempArr={setTempArr} amount={amount} setamount={setamount} bus={bus} setbus={setbus} busindex={busindex} setbusindex={setbusindex}/>} />
            <Route path='/booking-confirm' element={<BookingConfirm tempArr={tempArr} amount={amount} bus={bus} busindex={busindex}/>} />
          </Routes>
        </div>
      </BusState>
    </>
  )
}

export default App

