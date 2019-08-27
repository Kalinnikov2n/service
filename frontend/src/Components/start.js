import React from 'react';
// import data from './data';
import { NavLink } from "react-router-dom";
import Registration from "./registration";
import Login from "./login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Start() {
    return (
        <div className="App">
            <br></br>
            <div className = "mainPage">
            {/* <NavLink activeClassName = {"ActiveBtn"} to="/registration"><button id="firstBtn">Registration</button></NavLink> */}
            <NavLink activeClassName = {"ActiveBtn"} className="button" to="/registration">Registration</NavLink>
            <NavLink activeClassName = {"ActiveBtn"} className="button" to="/login">Login</NavLink>
            {/* <NavLink activeClassName = {"ActiveBtn"} to="/login"><button id = "secondBtn"> Login</button></NavLink> */}
 
            <Switch>
                <Route path="/registration" component={Registration} />
                <Route path="/login" component={Login} />
              </Switch>
            </div>
        </div>
    );
}

export default Start;