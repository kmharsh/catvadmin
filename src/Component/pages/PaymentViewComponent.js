import React from 'react';
const PaymentViewComponent = ({ handleEdit }) => {
    return (
        <>
            <div className="container">
                <div className='d-flex justify-content-between align-items-baseline w-100'>
                    <h2>
                        Payment
                    </h2>
                </div>
                <div class='grid-container'>
                    <div class='form-group flex-column d-flex'>
                        <strong>Name</strong>
                        <span>sub</span>
                    </div>
                    <div class='form-group flex-column d-flex'>
                        <strong>Phone</strong>
                        <span>inner</span>
                    </div>
                    <div class='form-group flex-column d-flex'>
                        <strong>Email</strong>
                        <span>innergjkh</span>
                    </div>
                    <div class='form-group flex-column d-flex'>
                        <strong>Role</strong>
                        <span>dffm</span>
                    </div>
                </div>
            </div>

        </>
    );
};

export default PaymentViewComponent;

