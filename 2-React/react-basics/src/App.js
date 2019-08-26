import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

import React, { Component } from 'react';
import Greeting from './components/Greeting';

class App extends Component {


  state = {
    message: 'greetings'
  }
  constructor(props) {
    super();

    console.log(props);

    console.log("App:: constructor()");

  }

  changeMessage(message) {

    this.setState({ message })

  }

  render() {
    const { title, trainer } = this.props;
    const { message } = this.state;

    console.log("App:: render()");
    return (
      <div className="container">
        <hr />
        <h1>{title} - by <span className="badge badge-info">{trainer}</span></h1>
        <hr />
        <button onClick={e => this.changeMessage('Good Morning')}>Good Morning</button>
        <button onClick={e => this.changeMessage('Good Afternoon')}>Good Afternoon</button>
        <button onClick={e => this.changeMessage('Good Evening')}>Good Evening</button>
        <button onClick={e => this.changeMessage('')}>Remove</button>

        <hr />

        {message ? <Greeting message={message} /> : null}

        <hr/>

       <Greeting message={message} />

       
        <hr />

      </div>


    );
  }

  componentDidMount() {
    console.log('App :: componentDidMount');

    setTimeout(()=>{
      let response='Hello, React ';
      this.setState({message:response});
    },6000);
  }
   //-----------------------------

   componentDidUpdate(prevProps, prevState, snapshot){
     console.log("App :: componentDidUpdate");
     
   }

}

App.defaultProps = {
  title: 'React Js'

}

App.propTypes = {
  title: PropTypes.string.isRequired,
  trainer: PropTypes.string
}

export default App;