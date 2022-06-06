import React from 'react'

const Tracking = () => {
    return (
        <>
            <div className="tracking">
                    <div className="trackingBox">
                        <h1 className="trackingBoxHead1 text-center">Bus Tracking</h1>
                        <h4 className="trackingBoxHead2 text-center">Enter Tracking Id</h4>
                        <div className="col-md-12">
                            <input className="form-control fIn"  rows="6" placeholder='Enter Tracking ID'></input>
                        </div>
                        <button className="btn1 idSubmitBtn">Submit</button>
                    </div>
            </div>
        </>
    )
}

export default Tracking