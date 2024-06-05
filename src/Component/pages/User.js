import React, { useState } from 'react';

import Table from '../inputComponent/table'; // Corrected Table import

import userData from '../../userData.json';
import DeleteComfirmationPopup from '../inputComponent/DeleteComfirmationPopup';
import { faTrashAlt, faEye, faEdit } from '@fortawesome/free-solid-svg-icons';
const User = () => {
    const [showDeleteconfirmation, setshowDeleteconfirmation] = useState(false);
    // Define fixed columns and default user table header
    const fixedColumns = ["Sr"];
    const ActionColumns = ["Action"]
    const defaultUserTableHeader = ["name", "phone", "email", "Role"];
    const [filters, setFilters] = useState({});
    const [formData, setFormData] = useState({
        Name: '',
        phone: '',
        email: '',
        Role: ''
    });
    // Combine fixed columns and user table header
    const mergedUserTableHeader = [...fixedColumns, ...defaultUserTableHeader, ...ActionColumns];
    const UserhandleView = (userName) => {
        window.location.href = `/UserViewComponent`;
    };

    const UserhandleEdit = (userData) => {

        window.location.href = `/AddUpdateuser`;
    };
    // delete button 
    const UserhandleDelete = (userName) => {
        setshowDeleteconfirmation(true);
        console.log("delete button", userName);
    };
    const deleteUer = (userData) => {

    }
    const filterSubmit = () => {
        console.log("Filter submitted with data:", formData);
        setFilters(formData);
    }
    const handleAddUser = (formData) => {
        console.log('Form submitted with data:');
        window.location.href = '/AddUpdateuser';
    };

    return (
        <div className='container'>
            <div className="table-responsive">
                <Table
                    userData={userData}
                    headers={mergedUserTableHeader}
                    sr={true}
                    action={1}
                    actionButtons={[
                        { action: 'view', icon: faEye, label: 'View', cssClass: 'btn btn-primary rounded font-weight-bolder mx-2 text-center', onClick: UserhandleView },
                        { action: 'edit', icon: faEdit, label: 'Edit', cssClass: 'btn btn-warning rounded font-weight-bolder mx-2 text-center', onClick: () => UserhandleEdit(userData) },
                        { action: 'delete', icon: faTrashAlt, label: 'Delete', cssClass: 'btn btn-danger rounded fontweightbolder mx-2 text-center', onClick: UserhandleDelete }

                    ]}
                    pagination={true}
                    rowsCountSelctor={true}
                    totalDbRows={100000000}
                    filter={true}
                    filterOptions={
                        [
                            {
                                level: "name",
                                type: "text",
                                className: "form-control w-100",
                                id: "",
                                value: formData.Name,
                                onChange: (e) => {
                                    const { name, value } = e.target;
                                    setFormData({
                                        ...formData,
                                        [name]: value
                                    })
                                },
                                placeholder: "Enter Api Name",
                                name: "Name",
                            },
                            {
                                level: "Phone",
                                type: "number",
                                className: "form-control w-100 ",
                                id: "",
                                value: formData.phone,
                                onChange: (e) => {
                                    const { name, value } = e.target;
                                    setFormData({
                                        ...formData,
                                        [name]: value
                                    })
                                },
                                name: 'phone',
                                placeholder: "Enter Phone"
                            },
                            {
                                level: "Email",
                                type: "email",
                                className: "form-control w-100",
                                id: "",
                                value: formData.email,
                                onChange: (e) => {
                                    const { name, value } = e.target;
                                    setFormData({
                                        ...formData,
                                        [name]: value
                                    })
                                },
                                name: 'email',
                                placeholder: "Enter Email"
                            },
                            {
                                level: "Role",
                                type: "select",
                                className: "form-control w-25",
                                id: "",
                                value: formData.Role,
                                onChange: (e) => {
                                    const { name, value } = e.target;
                                    setFormData({
                                        ...formData,
                                        [name]: value
                                    })
                                },
                                name: 'Role',
                                placeholder: "",
                                options: [
                                    { label: 'All', value: '' },
                                    { label: 'sub', value: 'sub' },
                                    { label: 'inner', value: 'inner' },
                                    { label: 'innergjkh', value: 'innergjkh' },
                                    { label: 'dffm', value: 'dffm' },
                                    { label: 'hjkhjjhj', value: 'hjkhjjhj' }
                                ]
                            }
                        ]
                    }
                    addButton={true}
                    onSubmitfilter={filterSubmit}
                    handleAddUser={handleAddUser}
                    handleAddItem={UserhandleEdit}
                />
                <DeleteComfirmationPopup
                    isOpen={showDeleteconfirmation}
                    lable={"User Mangment"}
                    message={"Are you sure to delete this User data"}
                    handleCancle={() => {
                        setshowDeleteconfirmation(false);
                    }}
                    handleConfirm={deleteUer}
                    children={"Are you sure in delete the data "}

                />
            </div>
        </div>
    );
};

export default User;
