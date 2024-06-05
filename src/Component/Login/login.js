import React, { useState } from 'react';
import InputField from '../inputComponent/InputField';
import Button from '../inputComponent/Button';

const Login = () => {
    const [formData, setFormData] = useState({
        Mobilenumber: '',
    });
    const [isDirty, setIsDirty] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        setIsDirty(true);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validation logic
        if (formData.Mobilenumber.trim().length !== 10 || !/^\d+$/.test(formData.Mobilenumber)) {
            return;
        }
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
                                        placeholder="Mobilenumber"
                                        className={"form-control mt-3"}
                                        required
                                    />
                                </div>
                                <div className="half p-4 py-md-5 bg-primary">
                                    <div className="form-group">
                                       
                                        <Button label="Sign me in now" onClick={() => console.log('Search button clicked')} className="form-control btn btn-secondary rounded  px-3" />
                                    </div>
                                    <div className="form-group d-md-flex ali-items-base">
                                        <div className="text-md-right">
                                            <a href="#">Forgot Password</a>
                                        </div>
                                    </div>
                                    <div className="w-100">
                                        <p className="social-media d-flex justify-content-center">
                                            <a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-facebook"></span></a>
                                            <a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-twitter"></span></a>
                                        </p>
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
