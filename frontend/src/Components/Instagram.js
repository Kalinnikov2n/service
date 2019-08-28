import React, { Component } from 'react'
import InstPosts from './InstPosts';
import {connect} from 'react-redux'

 class Instagram extends Component {

    constructor(props){
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount = async() => {
        const resp = await fetch(`http://localhost:3101/boolInst?user=${this.props.user}`)
      const data = await resp.json()
      if(data.boolToken === false){
        window.location.replace(`http://localhost:3101/instagram?user=${this.props.user}`)
      }
      console.log(data.postsData)
      this.setState({
          posts: data.postsData
      })
    }
    render() {
        return (
            <div className='socPosts'>
                {this.state.posts ? this.state.posts.map((post,index) => { console.log(post.caption)
                    if (post.type === 'video') {
                        return <InstPosts key = {index} videoLink={post.videos.low_bandwidth.url} imgLink={post.images.standard_resolution.url} likes = {post.likes.count} comments = {post.comments.count} text={post.caption ? post.caption.text : null} typeContent={post.type}/>
                    }
                   return <InstPosts key = {index} foto={post.images.standard_resolution.url} likes = {post.likes.count} comments = {post.comments.count} text={post.caption ? post.caption.text : null} typeContent={post.type}/>
                }) : null}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
      user: state.user.login
    }
  }
  
  
  
  export default connect(mapStateToProps)(Instagram)
  
