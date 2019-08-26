import React, { Component } from 'react';

class VKPost extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.post)
    return (
      <div>
        {/* <div><img src={this.props.post.attachments[0].photo.sizes[2].url} /></div> */}
        {this.props.post.attachments[0].link ?
          <div><img width='200px' src={this.props.post.attachments[0].link.photo.sizes[2].url} /></div> :
          <div><img width='200px' src={this.props.post.attachments[0].photo.sizes[2].url} /></div>}
        <div>
          <span>Comments: {this.props.post.comments.count}</span>
          <span>Likes: {this.props.post.likes.count}</span>
        </div>
      </div>
    )
  }
}

export default VKPost;
