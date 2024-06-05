import React, { useState } from 'react';
import Table from '../inputComponent/table'; // Corrected Table import
import OtppageData from '../../otppageData.json';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';
const Otppage = () => {
    // Define fixed columns and default user table header
    const fixedColumns = ["Sr"];
    const ActionColumns = []
    const defaultUserTableHeader = ["Phone", "Account No", "Otp", "is-send"];

    // Combine fixed columns and user table header
    const mergedUserTableHeader = [...fixedColumns, ...defaultUserTableHeader, ...ActionColumns];

    // filter
    const [filters, setFilters] = useState({});
    const [formData, setFormData] = useState({
        PhoneNumber: '',
        date: '',
    });
    const UserhandleView = (userName) => {
        console.log("view button", userName);

    };
    const filterSubmit = () => {
        console.log("Filter submitted with data:", formData);
        setFilters(formData);
    }
    return (
        <div className='container'>
            <div className="table-responsive">
                <Table
                    userData={OtppageData}
                    headers={mergedUserTableHeader}
                    sr={true}
                    action={false}
                    pagination={true}
                    rowsCountSelctor={true}
                    totalDbRows={100000000}
                    filter={true}
                    filterOptions={
                        [
                            {
                                level: "Phone Number",
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
                                placeholder: "Enter Phone Number",
                                name: "Phone Number",
                            },
                            {
                                level: "date",
                                type: "date",
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
                                placeholder: "",
                                name: "date",
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

export default Otppage;
