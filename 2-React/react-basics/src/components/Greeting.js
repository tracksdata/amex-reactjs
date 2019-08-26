import React, { Component } from 'react';

class Greeting extends Component {
    constructor(props) {
        super();
        console.log("Greeting :: constructor");
    }

    render() {
        console.log("Greeting :: render");
        const {message}=this.props;
       // message="Bla bla"; // illigegal operation. coz by default props are immutable

        return (
            <div>
                
                <div className="alert alert-info">
                    <div>{message}</div>
                   
                    <hr />
                    <div>
                        {new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' })}
                    </div>
                   

                </div>

            </div>
        );
    }

    componentDidMount(){
        console.log('Greeting :: componentDidMount');
        
    }

    //----------------------

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("Greeting :: componentDidUpdate");
        console.log(this.props); // present
        console.log(prevProps); 
      }

      //-----------

      componentWillUnmount(){
        console.log("Greeting :: componentWillUnmount");

      }

}

export default Greeting;