import React, { Component } from 'react';
import '../Action.css';
class Action extends Component {

    state = {
        count: 0
    }

    incrementCount() {
        const { count } = this.state;
        this.setState({ count: count + 1 })

        //------------------------------

        const { onAction,value } = this.props;

        if (onAction) { 
            // Call Parent Component Function using the onAction property
            onAction({ v:count * value }); // invokes parent component, onAction property's assigned value function
        }

    }

    render() {
        const { count } = this.state;
        const {value}=this.props;
        let className = `btn ${value < 0 ? 'btn-warning' : 'btn-success'}`;
        return (
            <div className="action">
                <div className="card card-body">

                    <button className={className} onClick={e => this.incrementCount()}>{this.props.value}</button>
                    <hr />
                    <span className="badge badge-dark">{count} </span>
                </div>
            </div>
        );
    }
}

export default Action;