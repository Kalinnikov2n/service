import React, { Component } from 'react'

export default class InstPosts extends Component {
    render() {
        return (
            <div className="posts">
                    <div>
                        <span>{this.props.text}</span>
                    <img src={this.props.foto} width="200px" ></img>
                        <p>Likes:{this.props.likes}</p>
                        <p>Comments:{this.props.comments}</p>
                    </div>
            </div>
        )
    }
}
