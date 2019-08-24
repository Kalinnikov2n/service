import React from 'react';
// import data from './data';
import { Link } from "react-router-dom";

function Start() {
    return (
        <div className="App">
            <Link to="/registration"> <button>Registration</button></Link>
            <Link to="/login"> <button>Login</button></Link>
        </div>
    );
}

export default Start;