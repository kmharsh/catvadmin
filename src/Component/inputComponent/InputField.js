import React, { useState } from 'react';
import ValidationComponent from '../ValidationComponent/ValidationComponent';

const InputField = ({ type, name, id, className, placeholder, value, onChange, label, required,tabIndex }) => {
    const [isDirty, setIsDirty] = useState(false);
    const handleBlur = () => {
        setIsDirty(true);
    };

    const validationRules = {
        required: required || false,
        maxlength: 10,
        pattern: /^[0-9]+$/
    };

    return (
        <div className="form-wrp px-2">
            <label className="label" htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                id={id}
                className={className}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                tabIndex={tabIndex}
                onBlur={handleBlur}
            />
            {isDirty && (
                <ValidationComponent
                    value={value}
                    rules={validationRules}
                />
            )}
        </div>
    );
}

export default InputField;
