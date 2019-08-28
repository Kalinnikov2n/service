import React, { Component } from 'react'
import CreateShield from './CreateShield'
import ServicePost from './ServicePost'

export default class ServicePosts extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false,
            posts:[]
        }
    }
    getModale = () =>{
        this.setState({modal : !this.state.modal})
    }
    async componentDidMount(){
        let resp = await fetch("/getPosts");
        let posts = await resp.json();
        console.log(posts)
        this.setState({posts:posts.posts})
    }
    render() {
        return (
            <div>
                <div >
                <button onClick={this.getModale}>get new Post</button>
                {this.state.modal ? <CreateShield getModale={this.getModale}/> : null}
                {this.state.posts.map(el => <ServicePost img= {el.imgUrl} title={el.title} description={el.description} id={el._id}/>)}
                </div>
            </div>
        )
    }
}
