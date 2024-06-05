import React from 'react';
import DynamicForm from '../inputComponent/FormComponent';
const AddUpdatePersmission = ({ isUpdate }) => {
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

export default AddUpdatePersmission;
