import React, { useState, useEffect } from 'react';
import InputField from '../inputComponent/InputField';

const TableDataFilter = ({ filterOptions, onSubmit, tableData }) => {
    const [formData, setFormData] = useState({});

    useEffect(() => {
        const initialFormData = filterOptions.reduce((acc, option) => {
            if (option.type === 'dateRange') {
                acc[option.name + "_start"] = "";
                acc[option.name + "_end"] = "";
            } else {
                acc[option.name] = "";
            }
            return acc;
        }, {});
        setFormData(initialFormData);
    }, [filterOptions]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form data",formData);
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className=' w-100 d-flex align-items-end justify-content-start'>
            {filterOptions.map((option) => {
                switch (option.type) {
                    case 'text':
                    case 'number':
                    case 'date':
                        return (
                            <InputField
                                key={option.name}
                                type={option.type}
                                name={option.name}
                                id={option.id}
                                className={option.className}
                                placeholder={option.placeholder}
                                value={formData[option.name] || ""}
                                onChange={handleChange}
                                tabIndex={option.tabIndex}  
                            />
                        );
                    case 'select':
                        return (
                            <select
                                key={option.name}
                                name={option.name}
                                id={option.id}
                                className={option.className}
                                value={formData[option.name] || ""}
                                onChange={handleChange}
                                tabIndex={option.tabIndex}  
                            >
                                <option value="" disabled>Select an option</option>
                                {option.options && option.options.map((opt) => (
                                    <option key={opt.value} value={opt.value}>
                                        {opt.label}
                                    </option>
                                ))}
                            </select>
                        );
                    case 'dateRange':
                        return (
                            <React.Fragment key={option.name}>
                                <InputField
                                    type="date"
                                    name={option.name + "_start"}
                                    id={option.id + "_start"}
                                    className={option.className + "-start"}
                                    value={formData[option.name + "_start"] || ""}
                                    onChange={handleChange}
                                    tabIndex={option.tabIndex}  
                                />
                                <InputField
                                    type="date"
                                    name={option.name + "_end"}
                                    id={option.id + "_end"}
                                    className={option.className + "-end"}
                                    value={formData[option.name + "_end"] || ""}
                                    onChange={handleChange}
                                    tabIndex={option.tabIndex}  
                                />
                            </React.Fragment>
                        );
                    default:
                        return null;
                }
            })}
            <button type="submit" className="btn-custom btn btn-success">
                <img src="./images/faces-clipart/search.png" alt="search" />
            </button>
        </form>
    );
};

export default TableDataFilter;
