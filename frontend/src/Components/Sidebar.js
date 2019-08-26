
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as  NavLink, Link } from "react-router-dom";

export class Sidebar extends Component {
  render() {
    return (
      <div className = "sideBar">
        <ul>
       <li><Link to="/servicePosts" >main</Link></li>
       <li><Link to="/VK">VK</Link></li>
       <li><Link to="/facebook">facebook</Link></li>
       <li><Link to="/instagram">instagram</Link></li>
      </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cards: state.cards
})


export default connect(mapStateToProps)(Sidebar)
