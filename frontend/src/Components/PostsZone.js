import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ServicePosts from "./ServicePosts"
import Instagram from './Instagram';
import VK from './VK';

export class PostsZone extends Component {
    render() {
      return (
        <div className="divPost">
        <Switch>
        <Route path="/servicePosts" component={ServicePosts} />
        <Route path="/vk" component={VK} />
        {/* <Route path="/facebook" component={Login} /> */} */}
        <Route path="/instagram" component={Instagram} />
        </Switch>
        </div>
      )
    }
  }
  
  const mapStateToProps = (state) => ({
    posts: state.posts
  })
  
  
  export default connect(mapStateToProps)(PostsZone)
  