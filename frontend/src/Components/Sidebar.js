
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as  NavLink, Link } from "react-router-dom";
import Wis from '../4.png'
import Vk from '../5.png'
import Face from '../6.png'
import Inst from '../7.png'

export class Sidebar extends Component {

  render() {
    return (
      <div className = "sideBar">
       <Link to="/servicePosts" ><img src = {Wis} width = "250px"/></Link>
       <Link to="/VK"><img src = {Vk} width = "230px"/></Link>
       <Link to="/facebook"><img src = {Face} width = "180px" className="faceInst"/></Link>
       <Link to="/instagram"><img src = {Inst} width = "180px"className="faceInst"/></Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cards: state.cards
})


export default connect(mapStateToProps)(Sidebar)
