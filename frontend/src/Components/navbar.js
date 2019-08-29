import React, {Component} from 'react';
// import './App.css';
import { delUser } from '../redux/actions';
import {connect} from 'react-redux'


class Navbar extends Component {
  constructor(props){
    super(props);
    this.state= {
      img : ""
    }
  }


   logOut = async() => {
      await fetch("/logout");
      this.props.del()
      window.location.assign("/")
  }
  show = async (e) =>{
    console.log(e.target.files[0]);
    
    let fd = new FormData();
    fd.append("image", e.target.files[0], e.target.files[0].name )
    console.log(fd);
    let resp = await fetch("/upload", {
      method: "POST",
      headers:{
      "Accept" : "application/json",
      },
      body : fd
    })
    let path = await resp.json()
    console.log(path.path.indexOf("/"))
    console.log(path.path.slice(path.path.indexOf("/")))
    let img = "http://localhost:3101" + path.path.slice(path.path.indexOf("/"))
    
    this.setState({img: img})

    // this.setState({img:img})

  }
  
  render(){
    return(
      <div className="navBar">
        {/* <input type= "file" onChange={this.show}></input>
        <img src = {this.state.img}></img> */}
        <div>
        <span> {this.props.user}</span>
        <button onClick={this.logOut}>Log out</button>
        </div>
      </div>
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
    del: () => dispatch( delUser() ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
