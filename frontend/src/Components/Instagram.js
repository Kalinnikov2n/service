import React, { Component } from 'react'
import InstPosts from './InstPosts';

export default class Instagram extends Component {

    constructor(props){
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount = async() => {
        const resp = await fetch('/boolInst')
      const data = await resp.json()
      if(data.boolToken === false){
        window.location.replace("http://localhost:3101/instagram")
      }
      console.log(data.postsData)
      this.setState({
          posts: data.postsData
      })
    }
    render() {
        return (
            <div>
                {this.state.posts.map((post,index) => {
                   return <InstPosts key = {index} foto = {post.images.standard_resolution.url} likes = {post.likes.count} comments = {post.comments.count} />
                })}
            </div>
        )
    }
}
