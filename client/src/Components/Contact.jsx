import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="contactSection">
                <h2 className="head">Contact Us</h2>
                <div className="col-md-7">
                    <form className="row g-3">
                        <div className="col-md-6">
                            <input type="email" className="form-control fIn" placeholder='Your Name'/>
                        </div>
                        <div className="col-md-6">
                            <input type="password" className="form-control fIn" placeholder='Your Email'/>
                        </div>
                        <div className="col-md-6">
                            <input type="email" className="form-control fIn" placeholder='Contact No.'/>
                        </div>
                        <div className="col-md-6">
                            <input type="password" className="form-control fIn" placeholder='Subject'/>
                        </div>
                        <div className="col-md-12">
                        <textarea className="form-control fIn" id="exampleFormControlTextarea1" rows="6" placeholder='Your Message'></textarea>
                        </div>
                        <button className="btn1 sendMsgBtn">Send Message</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact