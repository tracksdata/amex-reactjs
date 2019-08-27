import React, { Component } from 'react';
import ColorContext from './ColorContext';

class C extends Component {
    render() {
        return (
            <div>

                <div className="card card-body">

                    <pre>
                        C Component 
                        <span className="badge badge-danger">
                           <ColorContext.Consumer>
                            {value=>value}
                           </ColorContext.Consumer>

                        </span>
                    </pre>

                </div>


            </div>
        );
    }
}

export default C;