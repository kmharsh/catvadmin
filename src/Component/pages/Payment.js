
import React, { useState } from 'react';

import Table from '../inputComponent/table'; // Corrected Table import

import PayementData from '../../PayementData.json';
import { faEye } from '@fortawesome/free-solid-svg-icons';
const Payment = () => {
    // Define fixed columns and default user table header
    const fixedColumns = ["Sr"];
    const ActionColumns = ["Action"]
    const defaultUserTableHeader = ["WOITransactionID", "AccountNo", "TranStatus", "PGName", "TotalPaymentAmount", "ObrmSubmit", "ObrmPlanActivate", "UpassUpdate", "transactionLimit", "created_at"];

    // Combine fixed columns and user table header
    const mergedUserTableHeader = [...fixedColumns, ...defaultUserTableHeader, ...ActionColumns];
    // filter 

    const [filters, setFilters] = useState({});
    const [formData, setFormData] = useState({
        AccountNumber: '',
        dateRange: '',
        paymentgetway: '',
    });

    const UserhandleView = (PayementData) => {
        console.log("view button", PayementData);
        window.location.href = `/PaymentViewComponent`;
    };

    const filterSubmit = () => {
        console.log("Filter submitted with data:", formData);
        setFilters(formData);
    }
    return (
        <div className='container'>
            <div className="table-responsive">
                <Table
                    userData={PayementData}
                    headers={mergedUserTableHeader}
                    sr={true}
                    action={1}
                    actionButtons={[
                        { action: 'view', icon: faEye, label: 'View', cssClass: 'btn btn-primary rounded font-weight-bolder mx-2 text-center', onClick: UserhandleView },

                    ]}
                    pagination={true}
                    rowsCountSelctor={true}
                    totalDbRows={100000000}
                    filter={true}
                    filterOptions={
                        [
                            {
                                level: "Account Number",
                                type: "number",
                                className: "form-control mt-3",
                                id: "",
                                value: formData.Name,
                                onChange: (e) => {
                                    const { name, value } = e.target;
                                    setFormData({
                                        ...formData,
                                        [name]: value
                                    })
                                },
                                placeholder: "Account Number",
                                name: "AccountNumber",
                            },
                            {
                                level: "dateRange",
                                type: "dateRange",
                                className: "form-control mt-3",
                                id: "",
                                value: formData.Name,
                                onChange: (e) => {
                                    const { name, value } = e.target;
                                    setFormData({
                                        ...formData,
                                        [name]: value
                                    })
                                },
                                placeholder: "date Range",
                                name: "dateRange",
                            },
                            {
                                level: "payment getway",
                                type: "select",
                                className: "form-control mt-4 w-25",
                                id: "",
                                value: formData.Role,
                                onChange: (e) => {
                                    const { name, value } = e.target;
                                    setFormData({
                                        ...formData,
                                        [name]: value
                                    })
                                },
                                name: 'paymentgetway',
                                options: [
                                    { label: 'All', value: '' },
                                    { label: 'paytm', value: 'paytm' },
                                    { label: 'Billdesk', value: 'Billdesk' },
                                ]
                            }
                        ]
                    }
                    addButton={false}
                    onSubmitfilter={filterSubmit}
                />
            </div>
        </div>
    );
};

export default Payment;
