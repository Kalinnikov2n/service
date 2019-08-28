import React, { Component } from 'react';

class VKPost extends Component {
  constructor(props) {
    super(props)
  }

  get stats() {
    const { post } = this.props;
    return (
      <div>
        <p className='vkstats'>Comments: {post.comments.count}</p>
        <p className='vkstats'>Likes: {post.likes.count}</p>
        {post.views ? <p className='vkstats'>Views: {post.views.count}</p> : null}
      </div>
    )
  }

  render() {
    console.log(this.props.post)
    const { post } = this.props;

    if (!post.attachments) {
      return (
        <div className='posts'>Формат не поддерживается</div>
      )
    }

    if (post.attachments[0].link && post.attachments[0].link.photo) {
      return (
        <div className='posts'>
          <div className='inpost'>
            <p>Title: {post.attachments[0].link.title}</p>
            <p>{post.attachments[0].link.description}</p>
            <img width='200px' src={post.attachments[0].link.photo.sizes[2].url} alt="pict" />
            <div>{this.stats}</div>
          </div>
        </div>
      )
    }

    if (post.attachments[0].photo) {
      return (
        <div className='posts'>
          <div className='inpost'>
            <p>{post.text}</p>
            <img width='200px' src={post.attachments[0].photo.sizes[2].url} alt="pict" />
            <div>{this.stats}</div>
          </div>
        </div>
      )
    }
  }
}

export default VKPost;
