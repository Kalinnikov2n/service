import React from 'react';
// import data from './data';
import { NavLink } from "react-router-dom";
import Registration from "./registration";
import Login from "./login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { zoomInDown } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import StartDiv from './StartDiv'

const Bounce = styled.div`animation: 2s ${keyframes`${zoomInDown}`} `;

function Start() {
    return (
        <div className="App">
            <br></br>
            <Bounce>
            <div className = "mainPage">
            {/* <NavLink activeClassName = {"ActiveBtn"} to="/registration"><button id="firstBtn">Registration</button></NavLink> */}
            <NavLink activeClassName = {"ActiveBtn"} className="button" to="/registration">Sign Up</NavLink>
            <NavLink activeClassName = {"ActiveBtn"} className="button" to="/login">Sign In</NavLink>
            {/* <NavLink activeClassName = {"ActiveBtn"} to="/login"><button id = "secondBtn"> Login</button></NavLink> */}
            <Switch>
                <Route exact path="/" component={StartDiv} />
                <Route path="/registration" component={Registration} />
                <Route path="/login" component={Login} />
              </Switch>
            </div>
            </Bounce>
        </div>
    );
}

export default Start;