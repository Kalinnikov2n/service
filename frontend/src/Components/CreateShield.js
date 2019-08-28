import React, { Component } from 'react'

export default class CreateShield extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            img: true,
            imgUrl: ""
        }

    }
    textarea = (e) => {
        this.setState({ description: e.target.value })
    }
    title = (e) => {
        this.setState({ title: e.target.value })
    }

    img = (e) => {
        let file = e.target.files[0]
        this.setState({ img: file })
        this.setState({ imgUrl: window.URL.createObjectURL(file) })
    }

    save = async() => {
        let fd = new FormData();
        fd.append("image", this.state.img, this.state.img.name)
        console.log(fd);
        let resp = await fetch("/upload", {
            method: "POST",
            headers: {
                "Accept": "application/json",
            },
            body: fd
        })
        let post = await resp.json()
        console.log(post.postId)
        let data = {
            postId: post.postId,
            title: this.state.title,
            description: this.state.description
        }
        let resp2 = await fetch("/post", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        console.log("hi")
        this.props.getModale()
    }
    render() {
        return (
            <div>
                <input onChange={this.title} id="title" type="text" value={this.state.title} />
                <textarea onChange={this.textarea} id="description" type="text" value={this.state.description} />
                <input id="img" type="file" onChange={this.img} />
                <input type="submit" onClick={this.save} />
                {this.state.imgUrl ? <img src={this.state.imgUrl} width="100" height="100" alt="pict" /> : null}
            </div>
        )
    }
}