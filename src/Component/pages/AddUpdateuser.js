import React from 'react';
import DynamicForm from '../inputComponent/FormComponent';
const AddUpdateuser = ({ isUpdate }) => {
    const handleAddUser = (formData) => {
        if (isUpdate) {
            console.log('Form submitted for update add user with data:', formData);
            // Perform update logic here
        } else {
            console.log('Form submitted for addition add user with data:', formData);
            // Perform add logic here
        }
    };
    const formElements = [
        { type: 'text', name: 'name', options: { placeholder: 'Enter name', className: 'form-control w-100 ' , label:"Name" } },
        { type: 'email', name: 'email', options: { placeholder: 'Enter email', id: 'email-input', className: 'form-control w-100', label:"email"} },
        { type: 'tel', name: 'phone', options: { placeholder: 'Enter phone number', className: 'form-control w-100 ',label:"phone" } },
        {
            type: 'select',
            name: 'Role',
            options: {
                className: 'form-control w-100',
                label:"Role",
                choices: [
                    { label: 'Role 1', value: 'Role1' },
                    { label: 'Role 2', value: 'Role2' },
                    { label: 'Role 3', value: 'Role3' },
                ],
            },
        },
    ];
    return (
        <div className=' background-color'>
            <DynamicForm 
            elements={formElements} 
            onSubmit={handleAddUser} 
            submitbtn={"form-control btn btn-success w-15 rounded font-weight-bolder"} 
            className={"form-group mt-3 d-flex flex-wrap justify-content-center w-100"} 
            id={"123"} />
        </div>
    );
}

export default AddUpdateuser;
