import React, { useState } from 'react'

const Form1 = (props) => {

    const [user, setuser] = useState({ firstname: "", lastname: "", email: "", gender: "", phone: "", age: "", password: "", cpassword: "" })

    const onChange = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const { firstname, lastname, email, gender, phone, age, password, cpassword } = user;

        const response = await fetch('http://localhost:4300/auth/register', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ firstname, lastname, email, gender, phone, age, password, cpassword })
        })
        const json = await response.json();
        props.showAlert(json.message,json.type)
       setuser({ firstname: "", lastname: "", email: "", gender: "", phone: "", age: "", password: "", cpassword: ""})
    }
    
    return (
        <>
            <div className="form1">
                <h1 className="head1">Employee Registration Form</h1>

                <form className="registerForm" method="post" onSubmit={onSubmit}>
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="First name" aria-label="First name"
                                name="firstname" onChange={onChange} value={user.firstname} minLength='3' required/>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"
                                name="lastname" onChange={onChange} value={user.lastname} minLength='3' required/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <input type="email" className="form-control" placeholder="Your email" aria-label="email"
                                name="email" onChange={onChange} value={user.email} required/>
                        </div>

                        <div className="col d-flex align-items-center gender" value={user.gender} onChange={onChange}>
                            <input type="radio" id="female" name="gender" value="female"/>
                            <label htmlFor="female" id="female">Female</label><br />
                            <input type="radio" id="male" name="gender" value="male"/>
                            <label htmlFor="male" id="male">Male</label><br />
                            <input type="radio" id="others" name="gender" value="others"/>
                            <label htmlFor="others" id="others">Others</label><br />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Your Phone" aria-label="phone"
                                name="phone" onChange={onChange} value={user.phone} required/>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Enter Your Age" aria-label="age"
                                name="age" onChange={onChange} value={user.age} required/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <input type="password" className="form-control" placeholder="Password" aria-label="password"
                                name="password" onChange={onChange} minLength='5' value={user.password} required/>
                        </div>
                        <div className="col">
                            <input type="password" className="form-control" placeholder="Confirm Password"
                                aria-label="conf password" name="cpassword" onChange={onChange} minLength='5' value={user.cpassword} required/>
                        </div>
                    </div>

                    <div className="button">
                        <button className="reg_btn" type="submit">Register</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form1