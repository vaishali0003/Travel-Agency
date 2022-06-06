import React from 'react'

const Testimonial = (props) => {
  return (
    <>
     <div className="card card3" data-aos="fade-up">
                <div className="tSec1">
                    <h4 className="tSec11">{props.title}</h4>
                </div>
                <div className="card-body">
                    <div className="tSectitle">
                        <h5 className="card-title tSectitle1">{props.num}</h5>
                    </div>
                    <p className="card-text tSec-card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
    </>
  )
}

export default Testimonial