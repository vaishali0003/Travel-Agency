import React, { useState } from 'react'

const Form2 = (props) => {

    const [credentials, setcredentials] = useState({email:"",password:""})

    const onChange=(e)=>{
        console.log('onchange is clicked')
        setcredentials({...credentials,[e.target.name]:e.target.value})
    }

    const onSubmit = async(e) => {
        e.preventDefault();

        const { email,password } = credentials;

        const response=await fetch('http://localhost:4300/auth/login',{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({email,password})
        })
      const json=await response.json();
      props.showAlert(json.message,json.type)
    }


    return (
        <>
            <div className="form2" onSubmit={onSubmit}>
                <h1 className="head1">Employee Login Form</h1>
                <form action="/login" className="loginForm" method="post">
                    <div className="userImg">
                        <img src="../images/user-solid.svg" alt="user" />
                    </div>

                    <div className="mb-3">
                        <input type="email" className="form-control" name="email" value={credentials.name}
                            placeholder="Enter your email" onChange={onChange}/>
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" name="password" value={credentials.password}
                            placeholder="Enter your password" onChange={onChange}/>
                    </div>

                    <div className="SignIn">
                        <button className="SignIn_btn btn btn-primary">Sign in</button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default Form2