import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CounterBox from './components/CounterBox';
import Test from './components/Test';

function App() {
  return (
    <div className="container">
      <hr/>
      <hr/>
      <Test/>
      <hr/>
      <hr/>
      <CounterBox/>
    </div>
  );
}

export default App;
