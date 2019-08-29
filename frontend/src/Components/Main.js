import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from "./navbar";
import PostsZone from "./PostsZone"
import Sidebar from "./Sidebar"
import { addId } from '../redux/actions';

export class Main extends Component {
 

  render() {



    console.log("here")
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

function mapDispatchToProps(dispatch) {
  return {
    addId: (id) => dispatch( addId(id) ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
