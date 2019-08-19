import React from 'react';
function Navbar(props){

    let {tittle}=props;
    let {info}=props;

    return(
        <nav class="navbar navbar-light bg-primary">
        <p> {info}</p>
      </nav>

    );
}

export default Navbar;