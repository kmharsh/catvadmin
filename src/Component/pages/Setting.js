import React from 'react';
import FormComponent from '../inputComponent/FormComponent';

const Setting = () => {
  const handleSubmit = (formData) => {
    console.log('Form submitted with data:', formData);
  };

  const formElements = [
    { type: 'text', name: 'name', options: { label: 'Name', placeholder: 'Enter name', className: 'form-control w-100 my-2' } },
    { type: 'email', name: 'email', options: { label: 'Email', placeholder: 'Enter email', id: 'email-input', className: 'form-control w-100 my-2' } },
    { type: 'tel', name: 'phone', options: { label: 'Phone', placeholder: 'Enter phone number', className: 'form-control w-100 my-2' } },
    { type: 'number', name: 'age', options: { label: 'Age', placeholder: 'Enter age', className: 'form-control w-100 my-2' } },
    { type: 'password', name: 'password', options: { label: 'Password', placeholder: 'Enter password', className: 'form-control w-100 my-2' } },
    { type: 'textarea', name: 'message', options: { label: 'Message', placeholder: 'Enter message', className: 'form-control w-100 my-2' } },
    {
      type: 'select',
      name: 'category',
      options: {
        label: 'Category',
        className: 'form-control w-100 my-2',
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
        label: '',
        className: 'form-check w-100',
        choices: [
          { label: 'Male', value: 'male', id: 'male-radio', className: 'form-check-input' },
          { label: 'Female', value: 'female', id: 'female-radio', className: 'form-check-input' },
        ],
      },
    },
    { type: 'checkbox', name: 'agree', options: { label: 'I agree to terms', className: 'form-check-input my-2' } },
    { type: 'file', name: 'avatar', options: { label: 'Avatar', accept: 'image/*', className: 'form-control w-100 my-2' } },
    { type: 'range', name: 'rating', options: { label: 'Rating', className: 'form-range w-100 my-2', min: 1, max: 5 } },
    { type: 'hidden', name: 'userId', options: { value: '123', className: 'form-control w-100 my-2' } },
  ];

  return (
    <div className='container mt-5'>
      <div className='card shadow-sm'>
        <div className='card-header bg-success text-white'>
          <h3 className='mb-0'>Settings Form</h3>
        </div>
        <div className='card-body'>
          <FormComponent
            elements={formElements}
            onSubmit={handleSubmit}
            submitbtn={"btn btn-success w-50 mt-4"}
            className={"form-group"}
            id={"settings-form"}
          />
        </div>
      </div>
    </div>
  );
};

export default Setting;
