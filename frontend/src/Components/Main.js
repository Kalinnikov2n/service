import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from "./navbar";
import PostsZone from "./PostsZone"
import Sidebar from "./Sidebar"

export class Main extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <PostsZone/>
        <Sidebar/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cards: state.cards
})


export default connect(mapStateToProps)(Main)
