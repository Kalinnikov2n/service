import React, { Component } from 'react';

class VKPost extends Component {
  constructor(props) {
    super(props)
  }

  get stats() {
    const { post } = this.props;
    return (
      <div>
        <span>Comments: {post.comments.count}</span>
        <span>Likes: {post.likes.count}</span>
      </div>
    )
  }

  render() {
    console.log(this.props.post)
    const { post } = this.props;

    if (!post.attachments) {
      return (
        <div>Формат не поддерживается</div>
      )
    }

    if (post.attachments[0].link && post.attachments[0].link.photo) {
      return (
        <div>
          <img width='200px' src={post.attachments[0].link.photo.sizes[2].url} />
          {this.stats}
        </div>
      )
    }

    if (post.attachments[0].photo) {
      return (
        <div>
          <img width='200px' src={post.attachments[0].photo.sizes[2].url} />
          {this.stats}
        </div>
      )
    }
  }
}

export default VKPost;
