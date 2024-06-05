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
                <div className='background-color w-100 m-0 p-5'>
                    <div className="row flex-column border">
                        <div className="col-sm mt-2">
                            <div className=" d-flex justify-content-start">
                                <h6 className="card-title w-15">Account Number :</h6>
                                <p className="card-text">123-456-7890</p>
                            </div>
                        </div>
                        <div className="col-sm mt-2">
                            <div className=" d-flex justify-content-start">
                                <h6 className="card-title w-15">Api Name :</h6>
                                <p className="card-text">Get_sreach_user_details</p>
                            </div>
                        </div>
                        <div className="col-sm mt-2">
                            <div className=" d-flex justify-content-start">
                                <h6 className="card-title w-15">TimeSpent :</h6>
                                <p className="card-text">2021-12-21 11:23:33</p>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
        </>
    );
};

export default AccessViewComponent;

