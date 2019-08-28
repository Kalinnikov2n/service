import React, { Component } from 'react'
import CreateShield from './CreateShield'
import {Helmet} from 'react-helmet'

export default class ServicePost extends Component {
    async componentDidMount() {
        window.Ya.share2(this.props.title, {
            theme: { services: 'vkontakte,facebook' },
            content: {
                image: 'https://yastatic.net/morda-logo/i/logo.svg',
                title: "h",
                description: 'kjlkjkljl' 
            }
        });
    }
    
    //this.props.description,   

    render() {
        return (
            <div className = "postsWis">
                <Helmet>
                <meta property="og:title" content={this.props.title} />
                <meta property="og:description" content={this.props.description} />
                <meta property="og:image" content={this.props.img} />
                </Helmet>
                <img src={this.props.img} width="100" height="100" />
                <h3>{this.props.title}</h3>
                <div>{this.props.description}</div>
                <div id={this.props.title} data-services="vkontakte,twitter,facebook">
                </div>
               
            </div>
        )
    }
}
