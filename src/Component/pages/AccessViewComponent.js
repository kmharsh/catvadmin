import React from 'react';
const AccessViewComponent = ({ handleEdit }) => {
    return (
        <>
             <div className="container">
                <div className='d-flex justify-content-between align-items-baseline w-100'>
                    <h4>
                    Access
                    </h4>
                </div>
                
                <div class='grid-container'>
                    <div class='form-group flex-column d-flex'>
                        <strong>Account Number</strong>
                        <span>123-456-7890</span>
                    </div>
                    <div class='form-group flex-column d-flex'>
                        <strong>Api Name</strong>
                        <span>Get_sreach_user_details</span>
                    </div>
                    <div class='form-group flex-column d-flex'>
                        <strong>TimeSpent</strong>
                        <span>2021-12-21 11:23:33</span>
                    </div>
                   
                </div>

            </div>
        </>
    );
};

export default AccessViewComponent;

