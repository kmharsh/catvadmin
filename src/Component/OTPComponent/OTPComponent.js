import React, { useState } from 'react';
import InputField from '../inputComponent/InputField';
import Button from '../inputComponent/Button';

const OTPComponent = () => {
    const [formData, setFormData] = useState({
        otp: '',
    });
    const [isDirty, setIsDirty] = useState(false);
    const handleInputChange = (event) => {
        setFormData({ ...formData, otp: event.target.value });
        setIsDirty(true);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validation logic
        if (formData.otp.trim().length !== 6 || !/^\d+$/.test(formData.otp)) {
           
            return;
        }
        window.location.href = '/dashboard';
    };

    return (
  
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 col-lg-7">
                        <div className="login-wrap">
                            <form onSubmit={handleSubmit} className="signin-form d-md-flex">
                                <div className="half p-4 py-md-5">
                                    <div className="w-100">
                                        <h3 className="mb-4">Enter OTP</h3>
                                    </div>
                                    <InputField
                                        label="OTP"
                                        name="otp"
                                        type="text"
                                        value={formData.otp}
                                        onChange={handleInputChange}
                                        placeholder="Enter OTP"
                                        className={"form-control mt-3"}
                                        required
                                    />

                                </div>
                                <div className="half p-4 py-md-5 bg-primary">
                                    <div className="">
                                    <Button label="Submit" onClick={() =>""} className="form-control btn btn-secondary rounded  px-3" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
      
    );
};

export default OTPComponent;
