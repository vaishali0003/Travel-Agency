import React from 'react'

const Package = (props) => {
    return (
        <>
            <div className="card" data-aos="flip-left">
                <div className="cardTag">
                    <img src="../images/loc.png" alt="location" />
                    <p className='location'>{props.cardTag}</p>
                </div>
                <img src={props.img} className="card-img-top" alt="mumbai" />
                <div className="card-body">
                    <div className="title">
                    <h5 className="card-title">{props.disPrice} &#8377;</h5><p className='minTitle'>{props.oPrice}</p>
                    </div>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button href="/" className="btn1">Book Now</button>
                </div>
            </div>
        </>
    )
}

export default Package