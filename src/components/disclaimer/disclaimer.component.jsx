import React from 'react';
import SourceCodeInfo from '../source-code-info/source-code-info.component'

import './disclaimer.styles.scss';

class Disclaimer extends React.Component {
    constructor() {
        super();
        this.state = {
            shown: true
        }
    }

    handleHide = () => {
        this.setState({ shown: false })
    }

    render() {

        return (
            <div>
                {this.state.shown && (
                    <div className='disclaimer-bar'>
                        <div className='group'>
                            <p>
                                This is a proof of concept project.
                                I built this <a href='https://reactjs.org/'>ReactJS</a> App for demonstration purposes only.
                                It is not an actual shopping web site where you can buy the displayed products.
                                All the displayed images are Copyright-free and they do not belong to me.
                            </p>
                            <SourceCodeInfo />
                        </div>
                        <div className='close-button'>
                            <button onClick={this.handleHide}>X</button>
                        </div>
                    </div>
                )}
            </div>
        )
    }
};

export default Disclaimer;
