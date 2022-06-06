import React, { useState } from 'react'
import Book from './Book'

const Home = () => {

    // const [user, setuser] = useState({ from: "", to: "", date: "" })

    // const onChange = (e) => {
    //     setuser({ ...user, [e.target.name]: e.target.value })
    //     console.log(user)
    // }


    return (
        <>
            <div className="homeSection">
                <div className="col-md-10 d-flex justify-content-center align-items-center" style={{ marginBottom: "2rem" }}>
                    <div className="homeSec1">
                        <div className="homeSecImg">
                            <img src="../images/trip.svg" alt="" />
                        </div>
                    </div>
                    <div className="homeSec2">
                        <div className="homeSec2Txt">
                            <h1 className='h1'>Adventure is Worthwhile</h1>
                            <p className='p1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione similique dolorem minus. Culpa modi, voluptatum, pariatur perspiciatis vero harum accusamus molestias cum officia praesentium quos consequuntur! Cumque animi eaque accusamus?</p>
                            <button className="btn1">Explore Now</button>
                        </div>
                    </div>
                </div>

                <Book/>

                {/* <div className="journeyInfo col-md-10">

                    <form method='POST' className='journeyInfoForm'>
                        <div className="journeyIn">
                            <label htmlFor="from">Where From?</label>
                            <input type="text" name="from" value={user.from} onChange={onChange} />
                        </div>
                        <div className="journeyIn">
                            <label htmlFor="to">Where To?</label>
                            <input type="text" name="to" value={user.to} onChange={onChange} />
                        </div>
                        <div className="journeyIn">
                            <label htmlFor="from">Date?</label>
                            <input type="date" name="date" value={user.date} onChange={onChange} />
                        </div>
                        <div className="journeyIn">
                            <NavLink className="btn1 bookBtn" to="/booking">Book Now</NavLink>
                        </div>
                    </form>

                </div> */}

            </div>
        </>
    )
}

export default Home