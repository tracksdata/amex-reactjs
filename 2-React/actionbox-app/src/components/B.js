import React, { Component } from 'react';
import C from './C';

class B extends Component {
    render() {
        return (
            <div>

                <div className="card card-body">

                    <pre>
                        B Component
                    </pre>

                    <pre>
                        <C/>
                    </pre>

                </div>

            </div>
        );
    }
}

export default B;