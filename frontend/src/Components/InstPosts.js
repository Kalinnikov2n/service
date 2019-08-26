import React, { Component } from 'react'

export default class InstPosts extends Component {
    render() {
        return (
            <div className = "posts">
                <img src={this.props.foto} width = "100px"></img>
                <span>{this.props.likes}||</span>
                <span>{this.props.comments}</span>
            </div>
        )
    }
}
