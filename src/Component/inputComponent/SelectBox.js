import React, { useState } from 'react';

const SelectBox = ({ name, id, className, value, onChange, options, placeholder }) => {
    return (
        <select
            name={name}
            id={id}
            className={className}
            value={value}
            onChange={onChange}
        >
            {options.map((opt, index) => (
                <option key={index} value={opt.value}>
                    {opt.label}
                </option>
            ))}
        </select>
    );
};

export default SelectBox;
