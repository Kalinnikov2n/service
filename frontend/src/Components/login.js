import React, {Component} from 'react';
import { addUser, addId } from '../redux/actions';
import {connect} from 'react-redux'
import { zoomIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const Bounce = styled.div`animation: 1s ${keyframes`${zoomIn}`} `;


class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            login: "",
            password: "",
            mes:""
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
    let resp = await fetch("/log", {
        method: "POST",
        credentials: 'include',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      let user = await resp.json();
      console.log(user);
      if(user.mes){
          this.setState({mes : user.mes})
      }
      else{
      this.props.add(user.user)
      window.location.assign("/servicePosts")
      }

}

fb = async(e) =>{
  let id;
  let name;
  await window.FB.login( (response) => {
    if (response.authResponse) {
      id = response.authResponse.userID;
        this.props.addId(response.authResponse.userID)
    }  
}, { scope: "user_posts" })
await window.FB.api(`/${id}?fields=id,name`, (response) => {
  if (!response || response.error) {
  } else {
      console.log(response)
      name = response.name;
      this.props.add(response.name)
  }
});
let data = {
  login : name,
  password: ""
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
        <Bounce>
      <form onSubmit= {this.get}>
          <p className="wrong">{this.state.mes}</p>
      <p>Login</p>
          <input value= {this.state.login}  onChange={this.login}/>
          <p>Password</p>
          <input value={this.state.password} onChange={this.password} type= "password"/>
          <button type="submit" >Sign In</button>
      </form>
      <span onClick={this.fb}>Continue with Facebook</span>
      </Bounce>
      </div>
    )
  }
}



function mapDispatchToProps(dispatch) {
  return {
    add: (user) => dispatch( addUser(user) ),
    addId: (id) => dispatch( addId(id) ),
  }
}

export default connect(null, mapDispatchToProps)(Login)
