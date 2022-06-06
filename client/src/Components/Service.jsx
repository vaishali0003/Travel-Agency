import React from 'react'

const Service = (props) => {
    return (
        <>
            <div className="card card2" data-aos="zoom-in">
                <div className="service1">
                    <img src={props.img} alt="hotel" className='serviceImg' />
                    <h1 className="num">{props.num}</h1>
                </div>
                <div className="card-body">
                    <div className="title">
                        <h5 className="card-title">{props.title}</h5>
                    </div>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </>
    )
}

export default Service;