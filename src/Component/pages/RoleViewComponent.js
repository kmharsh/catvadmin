import React from 'react';
import Button from '../inputComponent/Button';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
const RoleViewComponent = ({ handleEdit }) => {
    return (
        <>
            <div classNameName="container">
                <div className='d-flex justify-content-between align-items-baseline w-100'>
                    <h4>
                        Role
                    </h4>
                    <Button icon={faEdit} label=""
                        onClick={handleEdit}
                        className="btn btn-warning rounded font-weight-bolder mx-2 text-center" />
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

export default RoleViewComponent;

