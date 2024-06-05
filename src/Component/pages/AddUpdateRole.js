import React from 'react';
import DynamicForm from '../inputComponent/FormComponent';
const AddUpdateRole = ({ isUpdate }) => {
    const handleAddUpdatePermission = (formData) => {
        if (isUpdate) {
            console.log('Form submitted for update with data:', formData);
            // Perform update logic here
        } else {
            console.log('Form submitted for addition with data:', formData);
            // Perform add logic here
        }
    };
    const formElements = [
        { type: 'text', name: 'name', options: { placeholder: 'Enter name', className: 'form-control w-100 ' , label:"Name" } },
        { type: 'checkbox', name: 'agree', options: { label: 'Create Role' } },
        { type: 'checkbox', name: 'agree', options: { label: 'View Role' } },
        { type: 'checkbox', name: 'agree', options: { label: 'Edit Role' } },
        { type: 'checkbox', name: 'agree', options: { label: 'Delete Role' } },
        { type: 'checkbox', name: 'agree', options: { label: 'Create Permission' } },
        { type: 'checkbox', name: 'agree', options: { label: 'Edit Permission' } },
        { type: 'checkbox', name: 'agree', options: { label: 'View Permission' } },
        { type: 'checkbox', name: 'agree', options: { label: 'Delete Permission' } },
    ];
    return (
        <div className=' background-color'>
            <DynamicForm 
            elements={formElements} 
            onSubmit={handleAddUpdatePermission} 
            submitbtn={"form-control btn btn-success w-15 rounded font-weight-bolder"} 
            className={"form-group mt-3 d-flex flex-wrap justify-content-center w-100"} 
            id={"123"} />
        </div>
    );
}

export default AddUpdateRole;
