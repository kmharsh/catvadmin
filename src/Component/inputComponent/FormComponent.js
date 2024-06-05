import React, { useState } from 'react';
const DynamicForm = ({ elements, onSubmit, className, id, submitbtn }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };
  

  return (
    <>
    
      <form onSubmit={handleSubmit} className={className} id={id}>
        {elements.map((element, index) => {
          const { type, name, options } = element;
          switch (type) {
            case 'input':
            case 'email':
            case 'tel':
            case 'number':
            case 'password':
            case 'text':
              return (
                <div className='form-group w-100'>
                  <label>{options?.label}</label>
                  <input
                    key={index}
                    type={type}
                    id={options.id || name}
                    className={options.className}
                    {...options}
                    value={formData[name] || ''}
                    onChange={(e) => handleChange(name, e.target.value)}
                  />
                </div>

              );
            case 'textarea':
              return (
                <div className='form-group w-100'>
                   <label>{options?.label}</label>
                  <textarea
                    key={index}
                    id={options.id || name}
                    className={options.className}
                    {...options}
                    value={formData[name] || ''}
                    onChange={(e) => handleChange(name, e.target.value)}
                  />
                </div>
              );
            case 'select':
              return (
                <div className='form-group w-100'>
                   <label>{options?.label}</label>
                  <select
                    key={index}
                    id={options.id || name}
                    className={options.className}
                    {...options}
                    value={formData[name] || ''}
                    onChange={(e) => handleChange(name, e.target.value)}
                  >
                    {options.choices.map((choice, i) => (
                      <option key={i} value={choice.value}>
                        {choice.label}
                      </option>
                    ))}
                  </select>
                </div>
              );
            case 'checkbox':
              return (
                <div className='d-flex align-items-center justify-content-start w-20 line-height mx-1'>
                   <label>{options?.label}</label>
                  <input
                    key={index}
                    id={options.id || name}
                    className={options.className}
                    {...options}
                    checked={formData[name] || false}
                    onChange={(e) => handleChange(name, e.target.checked)}
                    type="checkbox"
                  />
                </div>
              );
            case 'radio':
              return (
                <div className='form-group w-100'>
                  <div key={index}>
                    {options.choices.map((choice, i) => (
                      <label key={i}>
                        <input
                          type="radio"
                          id={choice.id || `${name}-${i}`}
                          className={choice.className}
                          {...options}
                          value={choice.value}
                          checked={formData[name] === choice.value}
                          onChange={(e) => handleChange(name, e.target.value)}
                        />
                        {choice.label}
                      </label>
                    ))}
                  </div>
                </div>
              );
            case 'file':
              return (
                <div className='form-group w-100'>
                   <label>{options?.label}</label>
                  <input
                    key={index}
                    id={options.id || name}
                    className={options.className}
                    type="file"
                    {...options}
                    onChange={(e) => handleChange(name, e.target.files[0])}
                  />
                </div>
              );
            case 'range':
              return (
                <div className='form-group  w-100'>
                   <label>{options?.label}</label>
                  <input
                    key={index}
                    id={options.id || name}
                    className={options.className}
                    type="range"
                    {...options}
                    value={formData[name] || ''}
                    onChange={(e) => handleChange(name, e.target.value)}
                  />
                </div>
              );
            case 'hidden':
              return (
                <div className='form-group  w-100'>
                   <label>{options?.label}</label>
                  <input
                    key={index}
                    id={options.id || name}
                    className={options.className}
                    type="hidden"
                    {...options}
                    value={formData[name] || ''}
                  />
                </div>
              );
            default:
              return null;
          }
        })}
      </form>
      <div className='w-10 d-flex justify-content-start'>
        <button type="submit" className={submitbtn}>Submit</button>
      </div>
    </>

  );
};
export default DynamicForm;