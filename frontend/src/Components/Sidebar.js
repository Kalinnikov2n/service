
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as  NavLink, Link } from "react-router-dom";

export class Sidebar extends Component {
  render() {
    return (
      <div>
       <Link to="/main">main</Link>
       <Link to="/VK">VK</Link>
       <Link to="/facebook">facebook</Link>
       <Link to="/instagram">instagram</Link>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cards: state.cards
})


export default connect(mapStateToProps)(Sidebar)
