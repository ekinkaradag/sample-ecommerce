import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, signInMethod, ...otherProps }) => (
    <button className={`${signInMethod} custom-button`} { ...otherProps }>
        { children }
    </button>
);

export default CustomButton;