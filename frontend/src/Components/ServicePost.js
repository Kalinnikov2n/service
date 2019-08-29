import React, { Component } from 'react'
import CreateShield from './CreateShield'
import {Helmet} from 'react-helmet'
import YandexShare from 'react-yandex-share';

export default class ServicePost extends Component {
    
    //this.props.description,   

    render() {
        return (
            <div className = "postsWis">
               <YandexShare content={{ title: this.props.title, image: this.props.img, url: this.props.img, description: this.props.description }}
          theme={{  services: 'vkontakte,facebook,twitter' }}/>
                <img src={this.props.img} width="100" height="100" />
                <h3>{this.props.title}</h3>
                <div>{this.props.description}</div>
                <div id={this.props.title} data-services="vkontakte,twitter,facebook">
                </div>
               
            </div>
        )
    }
}
