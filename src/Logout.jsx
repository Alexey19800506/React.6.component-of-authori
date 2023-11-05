import React from 'react';
import Spinner from './Spinner';

const Logout = props => { 
    return (   
      <button className='btn logout' onClick={props.onLogout}>Logout</button>         
    );   
}

export default Logout;