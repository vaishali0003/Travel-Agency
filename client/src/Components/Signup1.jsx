import React, { useState } from 'react'

const SignUp = () => {
    const [user, setuser] = useState({ firstname: "", lastname: "", email: "", gender: "", phone: "", age: "", password: "", cpassword: "" })

    const onChange = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value })
    }

    const onSubmit = async(e) => {
        e.preventDefault();

        const { firstname, lastname, email, gender, phone, age, password,cpassword } = user;

        const response=await fetch('http://localhost:4300/auth/register',{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({firstname, lastname, email, gender, phone, age, password,cpassword})
        })
      const json=await response.json();
      console.log(json);
    }

    const registration = () => {
        document.querySelector('.rg1-btn').style.background = 'white';
        document.querySelector('.rg1-btn').style.color = '#1303cd';
        document.querySelector('.lg1-btn').style.background = '#1303cd';
        document.querySelector('.lg1-btn').style.background = '#1303cd';
        document.querySelector('.lg1-btn').style.color = 'white';
        document.querySelector('.form1').style.display = 'block';
        document.querySelector('.form2').style.display = 'none';
    }

    const login = () => {
        console.log('login')
        document.querySelector('.lg1-btn').style.background = 'white';
        document.querySelector('.lg1-btn').style.color = '#1303cd';
        document.querySelector('.lg1-btn').style.borderRadius = '20px';
        document.querySelector('.lg1-btn').style.padding = '4px 13px';
        document.querySelector('.rg1-btn').style.background = '#1303cd';
        document.querySelector('.rg1-btn').style.background = '#1303cd';
        document.querySelector('.rg1-btn').style.color = 'white';
        document.querySelector('.form2').style.display = 'block';
        document.querySelector('.form1').style.display = 'none';
    }

    return (
        <>
            <div className="signUpSection">
                <div className="signUp container-fluid col-md-8">
                    <div className="row">
                        <div className="col-md-3 signUpleft">
                            <div className="left1">
                                <div className="rocketImg">
                                    <img src="../images/rocket.svg" alt="" />
                                </div>
                                <h1 className="T1">Welcome</h1>
                                <p className="T11">to Travel Agency</p>
                                <div className="login_btn1">
                                    <button className="login1">Login</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 signUpright">

                            <div className="switch-button">
                                <div className="rg1-btn c-btn" onClick={registration}>Registration</div>
                                <div className="lg1-btn" onClick={login}>Login</div>
                            </div>

                            <div className="form1">
                                <h1 className="head1">Employee Registration Form</h1>

                                <form className="registerForm" method="post" onSubmit={onSubmit}>
                                    <div className="row">
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="First name" aria-label="First name"
                                                name="firstname" onChange={onChange} value={user.firstname} minLength='3'/>
                                        </div>
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"
                                                name="lastname" onChange={onChange} value={user.lastname} minLength='3'/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <input type="email" className="form-control" placeholder="Your email" aria-label="email"
                                                name="email" onChange={onChange} value={user.email} />
                                        </div>

                                        <div className="col d-flex align-items-center gender">
                                            <input type="radio" id="female" name="gender" value="female" onChange={onChange} />
                                            <label htmlFor="female" id="female">Female</label><br />
                                            <input type="radio" id="male" name="gender" value="male" onChange={onChange} />
                                            <label htmlFor="male" id="male">Male</label><br />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="Your Phone" aria-label="phone"
                                                name="phone" onChange={onChange} />
                                        </div>
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="Enter Your Age" aria-label="age"
                                                name="age" onChange={onChange} />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <input type="password" className="form-control" placeholder="Password" aria-label="password"
                                                name="password" onChange={onChange} minLength='5'/>
                                        </div>
                                        <div className="col">
                                            <input type="password" className="form-control" placeholder="Confirm Password"
                                                aria-label="conf password" name="cpassword" onChange={onChange} />
                                        </div>
                                    </div>

                                    <div className="button">
                                        <button className="reg_btn" type="submit">Register</button>
                                    </div>
                                </form>
                            </div>


                            <div className="form2">
                                <h1 className="head1">Employee Login Form</h1>
                                <form action="/login" className="loginForm" method="post">
                                    <div className="userImg">
                                        <img src="../images/user-solid.svg" alt="user" />
                                    </div>

                                    <div className="mb-3">
                                        <input type="email" className="form-control" name="email"
                                            placeholder="Enter your email" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" className="form-control" name="password"
                                            placeholder="Enter your password" />
                                    </div>

                                    <div className="SignIn">
                                        <button className="SignIn_btn btn btn-primary">Sign in</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp