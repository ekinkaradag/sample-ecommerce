import React from 'react';
import SourceCodeInfo from '../source-code-info/source-code-info.component'

import './disclaimer.styles.css';

class Disclaimer extends React.Component {
    render() {
        return (
            <div className='disclaimer-bar'>
                <p>
                    This is a proof of concept project.
                    I built this <a href='https://reactjs.org/'>ReactJS</a> App for demonstration purposes only.
                    It is not an actual shopping web site where you can buy the displayed products.
                    All the displayed images are Copyright-free and they do not belong to me.
                </p>
                <SourceCodeInfo />
            </div>
        )
    }
};

export default Disclaimer;
