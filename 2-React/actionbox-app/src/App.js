import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ActionBox from './components/ActionBox';

class App extends Component {
  render() {
    return (
      <div className="container">
         <ActionBox/>
      </div>
    );
  }
}

export default App;