import React, { Component } from 'react';

class CounterBox extends Component {


    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    render() {
        let { count } = this.state;
        return (
            <div className="col-6 col-md-8 mt-3">
                <div className="card">
                    <div className="card-header bg-primary">Counter Box</div>


                    <div className="card-body text-center" >
                        Current Count: <span className="badge badge-dark">{count}</span>
                        <hr/>
                        <button onClick={e=>this.setState({count:count+1})} className="btn btn-primary" >+</button>
                        &nbsp;
                        <button onClick={e=>this.setState({count:count-1})} className="btn btn-primary" >-</button>

                    </div>

                </div>
            </div>
                );
            }
        }
        
export default CounterBox;