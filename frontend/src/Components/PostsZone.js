import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ServicePosts from "./ServicePosts"
import Instagram from './Instagram';
import VK from './VK';
import FacebookPosts from "./facebookPosts";

export class PostsZone extends Component {
    render() {
      return (
        <div className="divPost">
          <br></br>
          <div className = "divPostBack">
        <Switch>
        <Route path="/servicePosts" component={ServicePosts} />
        <Route path="/VK" component={VK} />
        <Route path="/facebook" component={FacebookPosts} /> */}
        <Route path="/instagram" component={Instagram} />
        </Switch>
          </div>
        </div>
      )
    }
  }
  
  const mapStateToProps = (state) => ({
    posts: state.posts
  })
  
  
  export default connect(mapStateToProps)(PostsZone)
  