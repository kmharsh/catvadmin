import React, { useState } from 'react';
import Paymentdetails from '../../paymentdetails.json';
import CompaintsData from '../../CompaintsData.json';
import Table from '../inputComponent/table'; // Corrected Table import
import { faEye } from '@fortawesome/free-solid-svg-icons';
const Customer = () => {
    const [openAccordionIndex, setOpenAccordionIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenAccordionIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    // Dummy data for multiple accordions
    const accordionData = [
        { title: 'TV1', active: 'active', price: '235rs', NCF: '71', HD: '52', SD: '530', Expirydate: '10-11-2024', content: 'Content for Accordion 1' },
        { title: 'TV1', active: 'in-active', price: '235rs', NCF: '71', HD: '52', SD: '530', Expirydate: '10-11-2024', content: 'Content for Accordion 2' },
    ];
    const fixedColumns = ["Sr"];
    const ActionColumns = ["Action"]
    const defaultUserTableHeader = ["Amount", "Mocle", "Date"];

    const defaultCompaintsTableHeader = ["Wol", "Type", "Natere"];

    // Combine fixed columns and user table header
    const mergedUserTableHeader = [...fixedColumns, ...defaultUserTableHeader, ...ActionColumns];
    const mergedCompaintsTableHeader = [...fixedColumns, ...defaultCompaintsTableHeader, ...ActionColumns];
    
    const UserhandleView = () => {
        console.log("view button");

    };

    const UserhandleEdit = (userName) => {
        console.log("edit button", userName);
    };

    const UserhandleDelete = (userName) => {
        console.log("delete button", userName);
    };
    return (
        <div className='container'>
            <div className="from-inner-wrp">
                <form className="form-group w-100 d-flex align-items-end justify-content-start">
                    <div className="from-wrp w-75">
                        <label className="label"></label>
                        <input type="text" className="form-control" placeholder="Enter Account/Vc/Mac/Vsc/Rm" value="" />
                        <div className="error-message"></div>
                    </div>
                    <button type="submit" className="btn-custom btn btn-success">
                        <img src="./images/faces-clipart/search.png" alt="search" />
                    </button>
                </form>
            </div>
            <div className='nameadrr-wrp'>
                <div className='row d-flex justify-content-between align-items-center'>
                    <div className='profile-user-wrp col-6'>
                        <img src="./images/faces-clipart/profileuser.png" alt="User Profile" />
                    </div>
                    <div className='col-3'>
                        <div className='TV-active-wrp'>
                            <p>2 TV Actived</p>
                        </div>
                    </div>
                </div>

                <div className="profile-section">
                    <div className='w-50'>
                        <div className="profile-item row">
                            <strong className='col-5'>Name</strong>
                            <span className='col'>:</span>
                            <span className='col-5'>John Doe</span>
                        </div>
                        <div className="profile-item row">
                            <strong className='col-5'>Phone</strong>
                            <span className='col'>:</span>
                            <span className='col-5'>767266268276</span>
                        </div>
                        <div className="profile-item row">
                            <strong className='col-5'>Address</strong>
                            <span className='col'>:</span>
                            <span className='col-5'>123 Main St</span>
                        </div>
                    </div>
                    <div className='w-50'>
                        <div className="profile-item row">
                            <strong className='col-5'>Pin Code</strong>
                            <span className='col'>:</span>
                            <span className='col-5'>12345</span>
                        </div>
                        <div className="profile-item row">
                            <strong className='col-5'>State</strong>
                            <span className='col'>:</span>
                            <span className='col-5'>Anystate</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='nameadrr-wrp'>
                {accordionData.map((accordion, index) => (
                    <div className='accordion' key={index}>
                        <div className='accordion-header' onClick={() => toggleAccordion(index)}>
                            <div className='d-flex justify-content-between align-items-center w-100'>
                                <h3 className='accordion-title'><img src="./images/faces-clipart/tv.png" alt="User Profile" />{accordion.title}</h3>
                                <span className='accordinn-inner'><strong>NCF:</strong> {accordion.NCF}</span>
                                <span className='accordinn-inner'><strong>Price:</strong> {accordion.price}</span>
                                <span className='accordinn-inner'><strong>HD:</strong> {accordion.HD}</span>
                                <span className='accordinn-inner'><strong>SD:</strong> {accordion.SD}</span>
                                <span className='accordinn-inner'><strong>Expirydate:</strong> {accordion.Expirydate}</span>
                                <strong className={`chip-active-btn ${accordion.active === 'active' ? 'active' : 'inactive'}`}>{accordion.active}</strong>
                                <span className={`accordion-arrow ${openAccordionIndex === index ? 'open' : ''}`}></span>
                            </div>
                        </div>
                        {openAccordionIndex === index && (
                            <div className='accordion-content'>
                                <p>{accordion.content}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className='nameadrr-wrp'>
                <h3>Payment Details</h3>
                <div className="table-responsive">
                    <Table
                        userData={Paymentdetails}
                        headers={mergedUserTableHeader}
                        sr={true}
                        action={1}
                        actionButtons={[
                            { action: 'view', icon: faEye, label: 'View', cssClass: 'btn btn-primary rounded font-weight-bolder mx-2 text-center', onClick: UserhandleView },

                        ]}
                        pagination={false}
                        rowsCountSelctor={false}
                        totalDbRows={12}
                        filter={false}
                        filterOptions={
                            ['']
                        }
                        addButton={false}
                        onSubmitfilter={false}
                    />
                </div>

            </div>
            <div className='nameadrr-wrp'>
                <h3>Compaints</h3>
                <div className="table-responsive">
                    <Table
                        userData={CompaintsData}
                        headers={mergedCompaintsTableHeader}
                        sr={true}
                        action={1}
                        actionButtons={[
                            { action: 'view', icon: faEye, label: 'View', cssClass: 'btn btn-primary rounded font-weight-bolder mx-2 text-center', onClick: UserhandleView },

                        ]}
                        pagination={false}
                        rowsCountSelctor={false}
                        totalDbRows={12}
                        filter={false}
                        filterOptions={
                            ['']
                        }
                        addButton={false}
                        onSubmitfilter={false}
                    />
                </div>

            </div>
        </div>
    );
}

export default Customer;
