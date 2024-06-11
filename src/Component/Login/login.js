import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputField from '../inputComponent/InputField';
import Button from '../inputComponent/Button';
import FacebookLogin from './FacebookLogin';
import TwitterLogin from './TwitterLogin';

const Login = () => {
    const [formData, setFormData] = useState({
        Mobilenumber: '',
    });
    const [isDirty, setIsDirty] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        setIsDirty(true);
        setErrorMessage('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validation logic
        if (formData.Mobilenumber.trim().length !== 10 || !/^\d+$/.test(formData.Mobilenumber)) {
            setErrorMessage('Please enter a valid 10-digit mobile number.');
            return;
        }

        // If valid, redirect to OTPComponent
        window.location.href = '/OTPComponent';
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12 col-lg-7">
                    <div className="login-wrap">
                        <form onSubmit={handleSubmit} className="signin-form d-md-flex">
                            <div className="half p-4 py-md-5 ">
                                <div className="w-100">
                                    <h3 className="mb-4">Sign In</h3>
                                </div>
                                <InputField
                                    label="Mobile number"
                                    name="Mobilenumber"
                                    type="text"
                                    value={formData.Mobilenumber}
                                    onChange={handleInputChange}
                                    placeholder="Mobile number"
                                    className={"form-control mt-3"}
                                    required
                                />
                                {errorMessage && <p className="text-danger mt-2">{errorMessage}</p>}
                            </div>
                            <div className="half p-4 py-md-5 bg-primary">
                                <div className="">
                                    <Button label="Sign me in now" type="submit" className="form-control btn btn-secondary rounded px-3" />
                                </div>
                                <div className='d-md-flex ali-items-base mrg-top'>
                                    <div className="d-md-flex ali-items-base w-100">
                                        <div className="text-md-right">
                                            <a href="#">Forgot Password</a>
                                        </div>
                                    </div>
                                    <div className="w-100">
                                        <div className="social-media d-flex justify-content-center">
                                            <FacebookLogin />
                                            <TwitterLogin />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
