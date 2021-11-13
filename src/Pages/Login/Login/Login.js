import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import './Login.css';
const Login = () => {
    const [loginData,setLoginData] = useState({})
    const {user,loginUser,isLoading, authError,googleLogin} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        console.log(loginData);
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email,loginData.password,location,history)
        e.preventDefault();
    }

    const handleGoogle = () => {
        googleLogin(location,history)
    }
    return (
        <div className="container">
            { isLoading && <Spinner animation="border" />}
                    {user.email && <div className="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Login Successful.</strong> Welcome to our website.
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>}
                    {authError && <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Opps!</strong> You should check in on some of those fields below.
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>}
            <section className="mx-auto my-5 login-section">  
                <div className="card login-card card-form mt-2 mb-4">
                    { !isLoading &&
                <div className="card-body rounded-top pink darken-4">
                    <h3 className="font-weight-bold text-center text-uppercase text-white my-4">Please Login</h3>
                    <form onSubmit={handleLoginSubmit} className="pb-5 px-2">
                    <div className="d-flex justify-content-start align-items-center mb-4">
                        <i className="far fa-envelope fa-lg text-white fa-fw me-3"></i>
                        <div className="form-outline form-white w-100">
                        <input name="email" onBlur={handleOnBlur} type="text" id="form1Example3" className="form-control" placeholder="Email"/>
                        </div>
                    </div>
                    <div className="d-flex justify-content-start align-items-center pb-3">
                        <i className="fas fa-key fa-lg text-white fa-fw me-3"></i>
                        <div className="form-outline form-white w-100">
                        <input name="password" onBlur={handleOnBlur} type="password" id="form1Example4" className="form-control" placeholder="Password" />
                        </div>
                    </div>
                    <button className="btn btn-outline-light btn-rounded btn-block my-4 z-depth-0"
                        type="submit">Login</button>
                        <p className="text-white">Not a member? <NavLink className="text-decoration-none text-white" to="/register">Register</NavLink></p>
                        <p className="text-white">or login with:</p>
                        <button onClick={handleGoogle} className="btn btn-outline-light btn-rounded btn-block my-4 z-depth-0"
                        type="button">Login with <i className="fab fa-lg fa-google px-2"></i></button> 
                    </form>
                </div>}
                <div className="card card-form-2 mb-0 z-depth-0">
                    <div className="card-body">  
                        <hr/>
                        <p>By clicking
                        <em>Sign up</em> you agree to our
                        <a className="pink-accent-text" href="#!" target="_blank">terms of service</a> and
                        <a className="pink-accent-text" href="#!" target="_blank">terms of service</a>. </p>
                    </div>
                </div>
                </div>
            </section>
        </div>
    );
};

export default Login;