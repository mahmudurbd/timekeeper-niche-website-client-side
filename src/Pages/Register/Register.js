import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css';
const Register = () => {
    const [registerData,setRegisterData] = useState({})
    const {user,registerUser,isLoading, authError} = useAuth();
    const history = useHistory();
    

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = {...registerData};
        newRegisterData[field] = value;
        console.log(field,value,registerData);
        setRegisterData(newRegisterData);
    }

    const handleRegisterSubmit = e => {
        if(registerData.password !== registerData.password2){
            alert("Password didn't match")
        }
        registerUser(registerData.email,registerData.password,registerData.name,history)
        
        e.preventDefault();
    }
    return (
        <div className="container">
            { isLoading && <Spinner animation="border" />}
                    {user.email && <div className="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Registration Successful.</strong> Thanks for Subscribing us.
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>}
                    {authError && <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Opps!</strong> You should check in on some of those fields below.
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>}
            <section className="mx-auto my-5 login-section">  
                <div className="card card-form mt-2 mb-4">
                    { !isLoading &&
                <div className="card-body rounded-top pink darken-4">
                    <h3 className="font-weight-bold text-center text-uppercase text-white my-4">Please Register</h3>
                    <form onSubmit={handleRegisterSubmit} className="pb-5 px-2">
                    <div className="d-flex justify-content-start align-items-center mb-4">
                        <i className="far fa-user fa-lg text-white fa-fw me-3"></i>
                        <div className="form-outline form-white w-100">
                        <input name="name" onBlur={handleOnBlur} type="text" id="form1Example3" className="form-control" placeholder="Name"/>
                        </div>
                    </div>
                    <div className="d-flex justify-content-start align-items-center mb-4">
                        <i className="far fa-envelope fa-lg text-white fa-fw me-3"></i>
                        <div className="form-outline form-white w-100">
                        <input name="email" onBlur={handleOnBlur} type="email" id="form1Example3" className="form-control" placeholder="Email"/>
                        </div>
                    </div>
                    <div className="d-flex justify-content-start align-items-center pb-3">
                        <i className="fas fa-key fa-lg text-white fa-fw me-3"></i>
                        <div className="form-outline form-white w-100">
                        <input name="password" onBlur={handleOnBlur} type="password" id="form1Example4" className="form-control" placeholder="Password" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-start align-items-center pb-3">
                        <i className="fas fa-key fa-lg text-white fa-fw me-3"></i>
                        <div className="form-outline form-white w-100">
                        <input name="password2" onBlur={handleOnBlur} type="password" id="form1Example4" className="form-control" placeholder="Re-type Password" />
                        </div>
                    </div>
                    <button className="btn btn-outline-light btn-rounded btn-block my-4 z-depth-0"
                        type="submit">Register</button>
                        <p className="text-white">Already registered? <NavLink className="text-decoration-none text-white" to="/login">Login</NavLink></p>
                        <p className="text-white">or login with:</p>
                        <button className="btn btn-outline-light btn-rounded btn-block my-4 z-depth-0"
                        type="submit">Login with <i className="fab fa-lg fa-google px-2"></i></button> 
                    </form>
                </div>
                    }
                    
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

export default Register;