import React, { useState } from 'react'
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom'
import OutsideClickHandler from 'react-outside-click-handler';

const Login = (props) => {

    const navigate=useNavigate();
    const [credentials, setcredentials] = useState({ email: "", password: "" })

    const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = credentials;

        const response = await fetch('http://localhost:4300/auth/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        const json = await response.json();
        if (json.success) {
            props.showAlert('User logged in successfully', 'success');
            console.log('success');
            localStorage.setItem('token', json.authToken);
            navigate('/');
        }

        props.showAlert('User logged in successfully', 'success')
    }

    const onc = () => {
        document.querySelector('.loginBox').style.display = 'none'
    }

    return (
        <>
            <OutsideClickHandler
                onOutsideClick={(e) => {
                    const loginBox = document.querySelector('.loginBox');
                    if (!loginBox.contains(e.target)) {
                        loginBox.style.display = 'none';
                    }
                }}
            >
                <div className="loginBox">
                    <form action="" method='POST' onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label lIn">Email</label>
                            <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label lIn">Password</label>
                            <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onChange} />
                        </div>
                        <div className="mb-3">
                            <button className="btn1 loginBtn1">Login</button>
                        </div>
                        <div className="mb-3">
                            <p className="loginFoot text-center">New User? <NavLink to='/signup'><span style={{ color: "orange" }} onClick={onc}>Signin</span></NavLink></p>
                        </div>
                    </form>
                </div>
            </OutsideClickHandler>
        </>
    )
}

export default Login