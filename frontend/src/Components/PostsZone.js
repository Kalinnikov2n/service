import React, { Component } from 'react';
import { connect } from 'react-redux';
export class PostsZone extends Component {
    render() {
      return (
        <div>
         hi
        </div>
      )
    }
  }
  
  const mapStateToProps = (state) => ({
    posts: state.posts
  })
  
  
  export default connect(mapStateToProps)(PostsZone)
  