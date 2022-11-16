import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[customError, setCustomError] = useState('');

    function handleEmail(e){
        setEmail(e.target.value)    ;
    }
    function handlePassword(e){
        setPassword(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
    }
    return (
        <div>
            <div className="container my-3">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <div className=" form-div ">
                            <h2>Log In</h2>
                            <hr style={{ marginBottom: "40px" }} />
                            <form action="" onSubmit={handleSubmit}>
                                <div className="email-field">
                                    <p>Email :</p>
                                    <input onBlur={handleEmail} type="email" name="" id="" />
                                </div>
                                <div className="password-field">
                                    <p>Password :</p>
                                    <input onBlur={handlePassword} type="password" name="" id="" />
                                </div>
                                <div className="text-center">
                                    {/* { loading && <Spinner animation="border" /> }
                                    {error ? <p style={{ color: 'red' }}> {error?.message} </p> : <p style={{ color: 'red' }}> {customError} </p>}   */}
                                </div>
                                <button>Login</button>
                                <p className="signUpText">Dont Have an Account ? <Link to="/signup">Sign Up Here</Link> </p>
                                <h4>Or</h4>
                                <div draggable className="googleButton">
                                    {/* <img src={googleLogo} alt="" /> */}
                                    <h4>Sign in Using Google</h4>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;