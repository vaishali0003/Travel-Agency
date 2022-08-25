import React from 'react'
import { useState } from 'react'

const Contact = (props) => {

    const [contacts, setcontacts] = useState({ name: "", email: "", contactno: "", subject: "", message: "" })

    const onChange = (e) => {
        setcontacts({ ...contacts, [e.target.name]: e.target.value });
    }

    const onSubmit = async () => {

        const { name, email, contactno, subject, message } = contacts;

        const response = await fetch('http://localhost:4300/contact/queries', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name,email, contactno,subject,message })
        })

        const json=await response.json();
        console.log(json);

        if(json.success){
            props.showAlert('Message sent successfully', 'success')
        }
        else{
            props.showAlert('Message not sent!','danger')
        }
    }

    return (
        <>
            <div className="contactSection" id="contactSection">
                <h2 className="head">Contact Us</h2>
                <div className="col-md-7">
                    <form className="row g-3" onSubmit={onSubmit}>
                        <div className="col-md-6">
                            <input type="text" className="form-control fIn" placeholder='Your Name' id='cname' name='name' value={contacts.name} onChange={onChange} />
                        </div>
                        <div className="col-md-6">
                            <input type="email" className="form-control fIn" placeholder='Your Email' id='cemail' name='email' value={contacts.email} onChange={onChange} />
                        </div>
                        <div className="col-md-6">
                            <input type="phone" className="form-control fIn" placeholder='Contact No.' id='ccontactno' name='contactno' value={contacts.contactno} onChange={onChange} />
                        </div>
                        <div className="col-md-6">
                            <input type="text" className="form-control fIn" placeholder='Subject' id='csubject' name='subject' value={contacts.subject} onChange={onChange} />
                        </div>
                        <div className="col-md-12">
                            <textarea className="form-control fIn" rows="6" placeholder='Your Message' id='cmessage' name='message' value={contacts.message} onChange={onChange}></textarea>
                        </div>
                        <button className="btn1 sendMsgBtn">Send Message</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact