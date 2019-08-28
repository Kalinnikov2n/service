import React, { Component } from 'react'

export default class InstPosts extends Component {
    render() {
        return (
            <div className="posts">
                    <div className='inpost'>
                    <img src={this.props.foto} width="200px" alt="pict" />
                        <p>Likes:{this.props.likes}</p>
                        <p>Comments:{this.props.comments}</p>
                    </div>
            </div>
        )
    }
}
