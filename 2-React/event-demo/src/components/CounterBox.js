import React, { Component } from 'react';
import Counter from './Counter';

class CounterBox extends Component {

    state = {
        totalCount: 0
    }
    pfun(e) {
        const { totalCount } = this.state;

        console.log('---> CounterBox pfun:: called ' + e);
        this.setState({ totalCount: totalCount + e })

    }
    render() {
        const { totalCount } = this.state;

        return (
            <div>

                <div className="card text-center">
                    <div className="card-header bg-primary">
                        <h4>Counter APP</h4>
                    </div>
                    <div className="card-body">
                        <Counter blable="+10" value={10} onAction={e => this.pfun(e)} />
                        <Counter blable="+20" value={20} onAction={e => this.pfun(e)} />
                        <Counter blable="-5" value={-5} onAction={e => this.pfun(e)} />
                        <Counter blable="-10" value={-10} onAction={e => this.pfun(e)} />


                    </div>
                    <div className="card-footer bg-info">
                        <h4>Summary:<span className="badge badge-primary">{totalCount}</span> </h4>
                    </div>

                </div>

            </div>
        );
    }
}

export default CounterBox;