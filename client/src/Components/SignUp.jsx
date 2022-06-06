import React from 'react'
import Form1 from './Form1'
import Form2 from './Form2'

const SignUp = (props) => {

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

                            <Form1 showAlert={props.showAlert}/>
                            <Form2 showAlert={props.showAlert}/>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp