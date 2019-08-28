import React, { Component } from 'react';
import './App.css';
import { addUser } from './redux/actions';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Components/Main";
import Start from "./Components/start";
import Background from './back.png';



class App extends Component {

  async componentDidMount() {
    if(!this.props.user){
      let resp = await fetch("/", {
        method: "POST",
        credentials: 'include',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      })
      let us = await resp.json();
      if (us.user) {
        await this.props.add(us.user)
      }
    }
    }
   
  render() {
    return (
      <Router>
        <div style={{backgroundImage:'url('+Background+')', backgroundSize:'cover'}}>
          {this.props.user ?
            <div>
              <Main/>
           </div>
            :
            <div>

              <Start />
            </div>
          }
        </div>
      </Router>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.login
  }
}

function mapDispatchToProps(dispatch) {
  return {
    add: (login) => dispatch(addUser(login)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
