import React, { Component } from 'react';
import './App.css';
import { addUser } from './redux/actions';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Registration from "./Components/registration";
import Login from "./Components/login";
import Main from "./Components/Main";
import Start from "./Components/start";
import Game from './Components/Game';


class App extends Component {

  async componentDidMount() {
    let resp = await fetch("http://localhost:3101", {
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
  render() {
    return (
      <Router>
        <div>
          {this.props.user ?
            <div>
              <Main/>
              <Route path='/game' component={Game} />
           </div>
            :
            <div>
              <Switch>
                <Route path="/registration" component={Registration} />
                <Route path="/login" component={Login} />
              </Switch>
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
