import React, { useState } from 'react';

const FormComponent = ({ elements, onSubmit, className, id, submitbtn }) => {
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
      <div className="row">
        <div className="col-md-6">
          {elements.slice(Math.ceil(elements.length / 6)).map((element, index) => {
            const { type, name, options } = element;
            switch (type) {
              case 'input':
              case 'text':
              case 'tel':
              case 'password':
                return (
                  <div key={index} className="form-group w-100 mb-3">
                    <label htmlFor={options.id || name} className="form-label">{options?.label}</label>
                    <input
                      type={type}
                      id={options.id || name}
                      className={`form-control ${options.className}`}
                      {...options}
                      value={formData[name] || ''}
                      onChange={(e) => handleChange(name, e.target.value)}
                    />
                  </div>
                );
              case 'select':
                return (
                  <div key={index} className="form-group w-100 mb-3">
                    <label htmlFor={options.id || name} className="form-label">{options?.label}</label>
                    <select
                      id={options.id || name}
                      className={`form-control ${options.className}`}
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
                  <div key={index} className="form-check w-100 mb-3">
                    <input
                      type="checkbox"
                      id={options.id || name}
                      className={`form-check-input ${options.className}`}
                      {...options}
                      checked={formData[name] || false}
                      onChange={(e) => handleChange(name, e.target.checked)}
                    />
                    <label htmlFor={options.id || name} className="form-check-label">{options?.label}</label>
                  </div>
                );
              case 'range':
                return (
                  <div key={index} className="form-group w-100 mb-3">
                    <label htmlFor={options.id || name} className="form-label">{options?.label}</label>
                    <input
                      type="range"
                      id={options.id || name}
                      className={`form-range ${options.className}`}
                      {...options}
                      value={formData[name] || ''}
                      onChange={(e) => handleChange(name, e.target.value)}
                    />
                  </div>
                );
            }
          })}
        </div>
        <div className="col-md-6">
          {elements.slice(Math.ceil(elements.length / 6)).map((element, index) => {
            const { type, name, options } = element;
            switch (type) {
              case 'input':
              case 'email':
              case 'number':
                return (
                  <div key={index} className="form-group w-100 mb-3">
                    <label htmlFor={options.id || name} className="form-label">{options?.label}</label>
                    <input
                      type={type}
                      id={options.id || name}
                      className={`form-control ${options.className}`}
                      {...options}
                      value={formData[name] || ''}
                      onChange={(e) => handleChange(name, e.target.value)}
                    />
                  </div>

                );
              case 'textarea':
                return (
                  <div key={index} className="form-group w-100 mb-3">
                    <label htmlFor={options.id || name} className="form-label">{options?.label}</label>
                    <textarea
                      id={options.id || name}
                      className={`form-control ${options.className}`}
                      {...options}
                      value={formData[name] || ''}
                      onChange={(e) => handleChange(name, e.target.value)}
                    />
                  </div>
                );
              case 'radio':
                return (
                  <div key={index} className="form-group w-100 mb-3">
                    <label className="form-label">{options?.label}</label>
                    <div className="row">
                      {options.choices.map((choice, i) => (
                        <div key={i} className="col-3">
                          <div className="form-check d-flex justify-content-start align-items-center">
                            <label htmlFor={choice.id || `${name}-${i}`} className="form-check-label ms-2">{choice.label}</label>
                            <input
                              type="radio"
                              id={choice.id || `${name}-${i}`}
                              className={`form-check-input ${choice.className}`}
                              {...options}
                              value={choice.value}
                              checked={formData[name] === choice.value}
                              onChange={(e) => handleChange(name, e.target.value)}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              case 'file':
                return (
                  <div key={index} className="form-group w-100 mb-3">
                    <label htmlFor={options.id || name} className="form-label">{options?.label}</label>
                    <input
                      type="file"
                      id={options.id || name}
                      className={`form-control ${options.className}`}
                      {...options}
                      onChange={(e) => handleChange(name, e.target.files[0])}
                    />
                  </div>
                );

            }
          })}
        </div>
      </div>
      
    </form>
    <button type="submit" className={submitbtn}>Submit</button>
    </>
  );
};

export default FormComponent;
