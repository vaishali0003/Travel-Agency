import React from 'react'
import Book from './Book'
import { NavLink } from 'react-router-dom'

const Home = () => {

    return (
        <>
            <div className="homeSection" id="homeSection">
                <div className="col-md-10 d-flex justify-content-center align-items-center" style={{ marginBottom: "2rem" }}>
                    <div className="homeSec1">
                        <div className="homeSecImg">
                            <img src="../images/trip.svg" alt="img" />
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

            </div>
        </>
    )
}

export default Home