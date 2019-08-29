import React, {Component} from 'react';
// import './App.css';
import { delUser, addId } from '../redux/actions';
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
  

  
  
  
  
  render(){
    return(
      <div className="navBar">
        <div className = "navBarSmall">
        <span> {this.props.user}</span>
        <span> <button onClick={this.logOut}> log out</button></span>
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
    addId: (id) => dispatch( addId(id) ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
