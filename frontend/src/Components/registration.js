import React, {Component} from 'react';
// import './App.css';
import { addUser, addId } from '../redux/actions';
import {connect} from 'react-redux'
import { zoomIn } from 'react-animations';
import { BrowserRouter as  NavLink, Link } from "react-router-dom";
import styled, { keyframes } from 'styled-components';

const Bounce = styled.div`animation: 1s ${keyframes`${zoomIn}`} `;


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

fb = async(e) =>{
  let id;
  let name;
  await window.FB.login( (response) => {
    if (response.authResponse) {
      console.log(response)
      id = response.authResponse.userID;
        this.props.addId(response.authResponse.userID)
    }  
     window.FB.api(`/${id}`, async (response) => {
      if (!response || response.error) {
        console.log(response)
      } else {
          console.log(response)
          name = response.name;
          this.props.add(response.name)
          let data = {
            login : name,
            password: "123"
          }
          console.log(data)
          let resp = await fetch("/check", {
            method: "POST",
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          })
          let user = await resp.json();
          console.log("hi")
          window.location.assign("/servicePosts")
          // this.props.add(user.user)
          // window.location.assign("/servicePosts")
          
      }
      
    
    });
}, { scope: "user_posts, email" })

// window.location.assign("/servicePosts")
console.log(name)


}
  
  render(){
    return(
      <div className = "logReg">
        <Bounce>
      <form onSubmit= {this.get}>
          <p>Login</p>
          <input value= {this.state.login} onChange={this.login}/>
          <p>Password</p>
          <input value={this.state.password} onChange={this.password} type= "password"/>
          <button type="submit" >Sign Up</button>
      </form>
      <Link to="/servicePosts" > <span onClick={this.fb}>Continue with Facebook</span></Link>
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

export default connect(null, mapDispatchToProps)(Registration)
