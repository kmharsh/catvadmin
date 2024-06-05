import React, { useState } from 'react';

const ValidationComponent = ({ value, rules, isDirty, isTouched }) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const validate = () => {
        if ((isTouched || isFocused) && isDirty) {
            // Only validate if the field is touched, focused, or dirty
            if (rules.required && !value.trim()) {
                return 'This field is required';
            }

            if (rules.pattern && !rules.pattern.test(value)) {
                return 'Invalid input';
            }

            if (rules.maxlength && value.length > rules.maxlength) {
                return `Maximum length is ${rules.maxlength}`;
            }

            if (rules.minlength && value.length < rules.minlength) {
                return `Minimum length is ${rules.minlength}`;
            }
        }

        return ''; // No error if field is not touched, focused, or dirty, or all validation checks pass
    };

    const errorMessage = validate();

    return (
        <div className="error-message" onFocus={handleFocus} onBlur={handleBlur}>
            {errorMessage && <span>{errorMessage}</span>}
        </div>
    );
};

export default ValidationComponent;
