import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Button = ({ onClick, label, className, icon = null }) => {
    return (
        <button className={className} onClick={onClick}>
            {icon && <FontAwesomeIcon icon={icon} className="mr-2" />}
            {label}
        </button>
    );
};

export default Button;
