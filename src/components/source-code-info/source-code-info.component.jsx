import React from 'react';
import './source-code-info.styles.css';

const SourceCodeInfo = (prop) => (
    <h3 style={{ textAlign: "center" }}>
        <a className='source-code-info' href={prop.href} target="_blank" rel="noopener noreferrer">
            Source code can be found on GitHub
        </a>
    </h3>

);

export default SourceCodeInfo;
