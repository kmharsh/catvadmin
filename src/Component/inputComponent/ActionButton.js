import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ActionButton = ({ onClick, label,icon = null, cssClass = "" }) => {
  return (
    <button onClick={onClick} className={cssClass}>
      {icon && <FontAwesomeIcon icon={icon} className="mr-2" />}
      {label}
    </button>
  );
};

export default ActionButton;