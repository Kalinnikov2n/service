import React, { Component } from 'react';
import Like from '../like.png';
import View from '../eye.png';
import Comment from '../comment.png';
import { bounceInUp } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const Bounce = styled.div`animation: 2s ${keyframes`${bounceInUp}`} `;


class VKPost extends Component {
  constructor(props) {
    super(props)
  }

  get stats() {
    const { post } = this.props;
    return (
      <div>
        <span className='stats'><img src={Comment} width={20} /> {post.comments.count}</span>
        <span className='stats'><img src={Like} width={20} /> {post.likes.count}</span>
        {post.views ? <span className='stats'><img src={View} width={20} /> {post.views.count}</span> : null}
      </div>
    )
  }

  render() {
    // console.log(this.props.post)
    const { post } = this.props;
    console.log("apowkdpokwapod",post)
    if (post.copy_history && post.copy_history[0].text) {
      return (
        <div>
          <Bounce>
          <p>
            {post.copy_history[0].text}
          </p>
          </Bounce>
        </div>
      )
    }

    if (post.copy_history && post.copy_history[0].attachments && post.copy_history[0].attachments[0].photo) {
      return (
        <div>
          <Bounce>
          <img src={post.copy_history[0].attachments[0].photo.sizes[0].url}/>
          </Bounce>
            {console.log("++++++++++++++++++++++")}
        </div>
      )
    }

    if (!post.attachments) {
      return (
        <div className='posts'></div>
      )
    }

    if (post.attachments[0].link && post.attachments[0].link.photo) {
      return (
        <div className='posts'>
          <Bounce>
          <div className='inpost'>
            <img className='picture' width='200px' src={post.attachments[0].link.photo.sizes[2].url} alt="pict" />
            <div className='underPicture'>
              <p>Title: {post.attachments[0].link.title}</p>
              <p>{post.attachments[0].link.description}</p>
            </div>
          </div>
          <div className='block'>{this.stats}</div>
          </Bounce>
        </div>
      )
    }

    if (post.attachments[0].photo) {
      return (
        <div className='posts'>
          <Bounce>
          <div className='inpost'>
            <img className='picture imgPic' width='200px' src={post.attachments[0].photo.sizes[2].url} alt="pict" />
            <div className='underPicture'>
              <p>{post.text}</p>
            </div>
          </div>
          <div className='block'>{this.stats}</div>
          </Bounce>
        </div>
      )
    }
  }
}

export default VKPost;
