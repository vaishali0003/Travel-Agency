import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


const Book = () => {

    const [user, setuser] = useState({ from: "", to: "", date: "" })

    const onChange = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="journeyInfo col-md-10">

                <form action="/booking" method='POST' className='journeyInfoForm'>

                    <div className="journeyIn">
                        <label htmlFor="from">Where From?</label>
                        <select name="from" onChange={onChange} required>
                            <option value="">Select City</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Jaipur">Jaipur</option>
                            <option value="Ajmer">Ajmer</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Nagpur">Nagpur</option>
                        </select>
                    </div>



                    <div className="journeyIn">
                        <label htmlFor="to">Where To?</label>
                        <select name="to" onChange={onChange} required>
                            <option value="">Select City</option>
                            <option value="Jaipur">Jaipur</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Ajmer">Ajmer</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Nagpur">Nagpur</option>
                        </select>
                    </div>


                    <div className="journeyIn">
                        <label htmlFor="from">Date?</label>
                        <input type="date" name="date" value={user.date} onChange={onChange} required />
                    </div>

                    <div className="journeyIn">
                        <NavLink className="btn1 bookBtn" to={`/booking?from=${user.from}&to=${user.to}&date=${user.date}`}>Book Now</NavLink>
                        {/* <button onClick={()=>{
                            console.log(user);
                        }}>click</button> */}
                    </div>
                </form>

            </div>
        </>
    )

}

export default Book