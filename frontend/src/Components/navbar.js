import React, {Component} from 'react';
// import './App.css';
import { delUser } from '../redux/actions';
import {connect} from 'react-redux'


class Navbar extends Component {

   logOut = async() => {
      let resp = await fetch("http://localhost:3101/logout");
      this.props.del()
  }
  
  render(){
    return(
      <div>
        <span> {this.props.user}</span>
        <span> <button onClick={this.logOut}> log out</button></span>
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
