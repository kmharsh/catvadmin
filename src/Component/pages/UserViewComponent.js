import React from 'react';
import Button from '../inputComponent/Button';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
const UserViewComponent = ({ handleEdit }) => {
    return (
        <>
            <div classNameName="container">
                <div className='d-flex justify-content-between align-items-baseline w-100'>
                    <h4>
                        User
                    </h4>
                    <Button icon={faEdit} label=""
                        onClick={handleEdit}
                        className="btn btn-warning rounded font-weight-bolder mx-2 text-center" />
                </div>
                <div className='background-color w-100 m-0 p-5'>
                    <div className="row flex-column border">
                        <div className="col-sm mt-2">
                            <div className=" d-flex justify-content-start">
                                <h6 className="card-title w-15">Name :</h6>
                                <p className="card-text">John Doe</p>
                            </div>
                        </div>
                        <div className="col-sm mt-2">
                            <div className=" d-flex justify-content-start">
                                <h6 className="card-title w-15">Phone :</h6>
                                <p className="card-text">123-456-7890</p>
                            </div>
                        </div>
                        <div className="col-sm mt-2">
                            <div className=" d-flex justify-content-start">
                                <h6 className="card-title w-15">Email :</h6>
                                <p className="card-text">john@example.com</p>
                            </div>
                        </div>
                        <div className="col-sm mt-2">
                            <div className=" d-flex justify-content-start">
                                <h6 className="card-title w-15">Role :</h6>
                                <p className="card-text">sub</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default UserViewComponent;

