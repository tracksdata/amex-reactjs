import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

ReactDOM.render(<App/>,document.getElementById('root'));

/*
// plain js code
let jsClock=document.getElementById('js-clock');

function jsTick(){
    let time=new Date().toLocaleTimeString();
   
    let ui=`
    <div class='alert alert-primary'>
        <span> ${time} ${name} </span>
    </div>
    `
    jsClock.innerHTML=ui;
}

setInterval(jsTick,1000);

// react code
let reactClock=document.getElementById('react-clock');

function reactTick(){
    let time=new Date().toLocaleTimeString();
    let ui=
    <div class='alert alert-success'>
        <span> {time} </span>
    </div>
    
    //jsClock.innerHTML=ui;
    ReactDOM.render(ui,reactClock);
}

setInterval(reactTick,1000);

*/