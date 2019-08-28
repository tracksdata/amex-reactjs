import React, { Component } from 'react';

class Counter extends Component {
    state={
        count:0
    }

    cfun(e) {
        const {count}=this.state;
        this.setState({count:count+1})
        console.log(this.props.value);
        // Invoke Parent Component function
        // 1. Create a custom event property in the Child Component

        const { onAction } = this.props;
        if(onAction)
        onAction(this.props.value); // invokes parent pfun function


    }
    render() {
        const {count}=this.state;
        return (
            <div className="myStyle">
               {this.props.blable} <button className="btn btn-primary" onClick={e => this.cfun(e)}>{count}</button>
            </div>
        );
    }
}

export default Counter;