
import React, { useState } from 'react';
import Table from '../inputComponent/table';
import DeleteComfirmationPopup from '../inputComponent/DeleteComfirmationPopup';
import RoleData from '../../RoleData.json';
import { faTrashAlt, faEye, faEdit } from '@fortawesome/free-solid-svg-icons';
const Role = () => {
    const [showDeleteconfirmation, setshowDeleteconfirmation] = useState(false);
    // Define fixed columns and default user table header
    const fixedColumns = ["Sr"];
    const ActionColumns = ["Action"]
    const defaultUserTableHeader = ["Role", "Number of User"];

    // Combine fixed columns and user table header
    const mergedUserTableHeader = [...fixedColumns, ...defaultUserTableHeader, ...ActionColumns];

    // filter
    const [filters, setFilters] = useState({});
    const [formData, setFormData] = useState({
        Role: ''
    });
    const UserhandleEdit = (RoleData) => {
        console.log("edit button", RoleData);
        window.location.href = `/AddUpdateRole`;
    };

    // delete button 
    const UserhandleDelete = (RoleData) => {
        setshowDeleteconfirmation(true);
        console.log("delete button", RoleData);
    };
    const deleteRole = (RoleData) => {

    }
    const filterSubmit = () => {
        console.log("filter submitted")
    }
    
    const handleAddUpdateRole = (formData) => {
        console.log('Form submitted with data:');
        window.location.href = '/AddUpdateRole';
    };
    return (
        <div className='container'>
            <div className="table-responsive">
                <Table
                    userData={RoleData}
                    headers={mergedUserTableHeader}
                    sr={true}
                    action={1}
                    actionButtons={[
                        // { action: 'view', icon: faEye, label: 'View', cssClass: 'btn btn-primary rounded font-weight-bolder mx-2 text-center', onClick: UserhandleView },
                        { action: 'edit', icon: faEdit, label: 'Edit', cssClass: 'btn btn-warning rounded font-weight-bolder mx-2 text-center', onClick: () => UserhandleEdit(RoleData) },
                        { action: 'delete', icon: faTrashAlt, label: 'Delete', cssClass: 'btn btn-danger rounded fontweightbolder mx-2 text-center', onClick: UserhandleDelete }

                    ]}
                    pagination={true}
                    rowsCountSelctor={true}
                    totalDbRows={100000000}
                    filter={true}
                    filterOptions={
                        [
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
                    handleAddItem={handleAddUpdateRole}
                    UserhandleEdit={UserhandleEdit}
                />
                <DeleteComfirmationPopup
                    isOpen={showDeleteconfirmation}
                    lable={"User Mangment"}
                    message={"Are you sure to delete this Role data"}
                    handleCancle={() => {
                        setshowDeleteconfirmation(false);
                    }}
                    handleConfirm={deleteRole}
                    children={"Are you sure in delete the data "}

                />
            </div>
        </div>
    );
};

export default Role;
