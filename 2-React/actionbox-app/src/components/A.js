import React, { Component } from 'react';
import B from './B';
import ColorContext from './ColorContext';

class A extends Component {
    render() {
        return (
            <div>
                <div className="card card-body">

                    <pre>
                        A Component
                        <span className="badge badge-danger">
                            {this.props.color}
                        </span>
                    </pre>

                    <pre>
                        
                        <ColorContext.Provider value={this.props.color}>
                                <B/>
                        </ColorContext.Provider>

                    </pre>

                </div>
                
            </div>
        );
    }
}

export default A;