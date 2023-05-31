import React from 'react';
import './button-custom.css';

export const ButtonCustom = ({ label, active }) => {
    const isActive = active ? 'active' : 'inactive';
    return (
        <button type='button' className={`button-default button-${isActive}`}>
            <span className={`text-default text-${isActive}`}>{label}</span>
        </button>
    );
};

ButtonCustom.defaultProps = {
    active: true,
};
