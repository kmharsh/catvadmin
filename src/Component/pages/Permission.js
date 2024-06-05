import React,{useState} from 'react';
import Table from '../inputComponent/table'; // Corrected Table import
import PermissionData from '../../Permission.json';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import DeleteComfirmationPopup from '../inputComponent/DeleteComfirmationPopup';

const Permission  = () => {
    const [showDeleteconfirmation, setshowDeleteconfirmation] = useState(false);
    // Define fixed columns and default user table header
    const fixedColumns = ["Sr"];
    const ActionColumns = ["Action"]
    const defaultUserTableHeader = ["Permission Name"];

    // Combine fixed columns and user table header
    const mergedUserTableHeader = [...fixedColumns, ...defaultUserTableHeader, ...ActionColumns];

    // filter
    const [filters, setFilters] = useState({});
    const [formData, setFormData] = useState({
        Permission: '',
    });
    const UserhandleView = (userName) => {
        console.log("view button",userName);
        
    };

    const UserhandleEdit = (PermissionData) => {
        console.log("edit button",PermissionData);
        window.location.href = `/AddUpdatePersmission`;
    };
    // delete button 
    const UserhandleDelete = (PermissionData) => {
        setshowDeleteconfirmation(true);
    };
    const deletePermission = (PermissionData) => {

    }
    
    const filterSubmit = () => {
        console.log("Filter submitted with data:", formData);
        setFilters(formData);
    }

    const handleAddUpdatePermission = (formData) => {
        console.log('Form submitted with data:');
        window.location.href = '/AddUpdatePersmission';
    };
    return (
        <div className='container'>
            <div className="table-responsive">
                <Table
                    userData={PermissionData}
                    headers={mergedUserTableHeader}
                    sr={true}
                    action={1}
                    actionButtons={[
                        { action: 'edit', icon: faEdit, label: 'Edit', cssClass: 'btn btn-warning rounded font-weight-bolder mx-2 text-center',onClick:UserhandleEdit },
                        { action: 'delete', icon: faTrashAlt, label: 'Delete', cssClass: 'btn btn-danger rounded fontweightbolder mx-2 text-center',onClick:UserhandleDelete }
                        
                    ]}
                    pagination={true}
                    rowsCountSelctor={true}
                    totalDbRows={100000000}
                    filter={true}
                    filterOptions={
                        [
                            {
                                level:"Permission",
                                type:"text",
                                className:"form-control mt-3",
                                id:"",
                                 value: formData.Name,
                                onChange: (e) => {
                                    const { name, value } = e.target;
                                    setFormData({
                                        ...formData,
                                        [name]: value
                                    })
                                },
                                placeholder: "Enter Permission Name",
                                name: "Permission",
                            },
                        ]
                    }
                    addButton={true}
                    onSubmitfilter={filterSubmit}
                    handleAddItem={handleAddUpdatePermission}
                    UserhandleEdit={UserhandleEdit}
                    UserhandleDelete={UserhandleDelete}
                />
                <DeleteComfirmationPopup

                    isOpen={showDeleteconfirmation}
                    lable={"Permission"}
                    message={"Are you sure to delete this permission"}
                    handleCancle={() => {
                        setshowDeleteconfirmation(false);
                    }} 
                    handleConfirm={deletePermission}
                
                children={"Are you sure in delete the data "}
                
            />
            </div>
        </div>
    );
};

export default Permission;
