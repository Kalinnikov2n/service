import React, {Component} from 'react';
// import './App.css';
import { addUser } from '../redux/actions';
import {connect} from 'react-redux'


class Registration extends Component {
    constructor(props){
        super(props);
        this.state = {
            login: "",
            password: "",
        }
    }
  password = (e) => {
      this.setState({password: e.target.value})
  }

  login = (e) => {
    this.setState({login: e.target.value})
}

get = async (e) => {
    e.preventDefault()
    let data = {
        login : this.state.login,
        password: this.state.password
    }
    let resp = await fetch("/reg", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      let user = await resp.json();
      this.props.add(user.user)
      window.location.assign("/servicePosts")

}
  
  render(){
    return(
      <div className = "logReg">
      <form onSubmit= {this.get}>
          <p>Login</p>
          <input value= {this.state.login} onChange={this.login}/>
          <p>Password</p>
          <input value={this.state.password} onChange={this.password} type= "password"/>
          <button type="submit" >Sign Up</button>
      </form>
      </div>
    )
  }
}



function mapDispatchToProps(dispatch) {
  return {
    add: (user) => dispatch( addUser(user) ),
  }
}

export default connect(null, mapDispatchToProps)(Registration)
