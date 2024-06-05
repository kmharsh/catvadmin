import React from 'react';
import DynamicForm from '../inputComponent/FormComponent';
const Setting = () => {
    const handleSubmit = (formData) => {
        console.log('Form submitted with data:', formData);
    };
    const formElements = [
        { type: 'text', name: 'name', options: { placeholder: 'Enter name', className: 'form-control w-100 my-1' } },
        { type: 'email', name: 'email', options: { placeholder: 'Enter email', id: 'email-input', className: 'form-control w-100 my-1' } },
        { type: 'tel', name: 'phone', options: { placeholder: 'Enter phone number', className: 'form-control w-100 my-1' } },
        { type: 'number', name: 'age', options: { placeholder: 'Enter age', className: 'form-control w-100 my-1' } },
        { type: 'password', name: 'password', options: { placeholder: 'Enter password', className: 'form-control w-100 my-1' } },
        { type: 'textarea', name: 'message', options: { placeholder: 'Enter message', className: 'form-control w-100 my-1' } },
        {
            type: 'select',
            name: 'category',

            options: {
                className: 'form-control w-100 my-1',
                choices: [
                    { label: 'Category 1', value: 'cat1' },
                    { label: 'Category 2', value: 'cat2' },
                    { label: 'Category 3', value: 'cat3' },
                ],
            },
        },
        {
            type: 'radio',
            name: 'gender',
            options: {
                className: 'w-100 my-1',
                choices: [
                    { label: 'Male', value: 'male', id: 'male-radio' },
                    { label: 'Female', value: 'female', id: 'female-radio' },
                ],
            },
        },
        { type: 'checkbox', name: 'agree', options: { className: 'w-100 my-1', label: 'I agree to terms' } },
        { type: 'file', name: 'avatar', options: { accept: 'image/*' } },
        { type: 'range', name: 'rating', options: { className: 'form-control w-100 my-1', min: 1, max: 5 } },
        { type: 'hidden', name: 'userId', options: { className: 'form-control w-100 my-1', value: '123' } },
    ];
    return (
        <div className='d-flex justify-content-start flex-column p-3'>
            <DynamicForm elements={formElements} onSubmit={handleSubmit} submitbtn={"form-control btn btn-success w-15 rounded font-weight-bolder"} className={"form-group mt-3 d-flex flex-wrap justify-content-start w-50"} id={"123"} />
        </div>
    );
}

export default Setting;
