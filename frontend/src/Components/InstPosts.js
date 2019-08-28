import React, { Component } from 'react';
import Like from '../like.png';
import View from '../eye.png';
import Comment from '../comment.png';

export default class InstPosts extends Component {
    render() {
        return (
            <div className="posts">
                <div className='inpost'>
                    <img   className='picture' src={this.props.foto} width="200px" alt="pict" />
                    <div>
                        <span className='stats'><img src={Like} width={20} /> {this.props.likes}</span>
                        <span className='stats'><img src={Comment} width={20} /> {this.props.comments}</span>
                    </div>
                </div>
            </div>
        )
    }
}
