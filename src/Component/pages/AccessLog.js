import React, { useState } from 'react';
import Table from '../inputComponent/table'; // Corrected Table import
import Accessdata from '../../AccessLog.json';
import {  faEye } from '@fortawesome/free-solid-svg-icons';

const AccessLog  = () => {
    // Define fixed columns and default user table header
    const fixedColumns = ["Sr"];
    const ActionColumns = ["Action"]
    const defaultUserTableHeader = ["Account Number", "Api Name", "TimeSpent"];

    // Combine fixed columns and user table header
    const mergedUserTableHeader = [...fixedColumns, ...defaultUserTableHeader, ...ActionColumns];
    const [filters, setFilters] = useState({});
    const [formData, setFormData] = useState({
        apiName: '',
        accountNumber: ''
    });

    const UserhandleView = (userName) => {
        console.log("view button",userName);
        window.location.href = `/AccessViewComponent`;
        
    };
    
    const filterSubmit = (formData) => {
        console.log("Filter submitted with data:", formData);
          setFilters(formData);
    };
    return (
        <div className='container'>
            <div className="table-responsive">
                <Table
                    userData={Accessdata}
                    headers={mergedUserTableHeader}
                    sr={true}
                    action={1}
                    actionButtons={[
                        { action: 'view', icon: faEye, label: 'View', cssClass: 'btn btn-primary rounded font-weight-bolder mx-2 text-center',onClick:UserhandleView }
                        
                    ]}
                    pagination={true}
                    rowsCountSelctor={true}
                    totalDbRows={100000000}
                    filter={true}
                    filterOptions={
                        [
                            {
                                level:"Api name",
                                type:"text",
                                className:"form-control mt-3",
                                id:"",
                                value: formData.apiName,
                                onChange: (e) => {
                                    const { name, value } = e.target;
                                    setFormData({
                                        ...formData,
                                        [name]: value
                                    })
                                },
                                placeholder:"Enter Api Name",
                                name: "apiName"
                            },
                            {
                                level:"Acount Number",
                                type:"number",
                                className:"form-control mt-3",
                                id:"",
                                onChange: (e) => {
                                    const { name, value } = e.target;
                                    setFormData({
                                        ...formData,
                                        [name]: value
                                    })
                                },
                                value: formData.accountNumber,
                                placeholder:"Enter Acount Number",
                                name: "accountNumber"
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

export default AccessLog;
