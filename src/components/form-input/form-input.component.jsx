import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps}) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps} />
        {
            label ?
            (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                {/* If otherProps.value.length is not zero make the className 'shrink' */}
                {label}
            </label>)
            : null
        }
    </div>
)

export default FormInput;