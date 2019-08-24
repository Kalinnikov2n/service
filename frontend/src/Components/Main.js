import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from "./navbar";

export class Main extends Component {
  render() {
    return (
      <div>
        <Link to={'/game'}>Start</Link>
        <Navbar/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cards: state.cards
})


export default connect(mapStateToProps)(Main)
