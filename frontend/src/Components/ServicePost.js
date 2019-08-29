import React, { Component } from 'react'
import CreateShield from './CreateShield'
import { Helmet } from 'react-helmet'
import YandexShare from 'react-yandex-share';
import { bounceInUp } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import Like from '../like.png';
import Comment from '../comment.png';

const Bounce = styled.div`animation: 2s ${keyframes`${bounceInUp}`} `;

export default class ServicePost extends Component {

    //this.props.description,   

    render() {
        return (
            <div className="posts">
                <Bounce>
                    <div className="inpost">
                        <div className="imgPic">
                            <img src={this.props.img} width="200" className="picture" />
                        </div>
                        <h3>{this.props.title}</h3>
                        <div>{this.props.description}</div>
                        <div id={this.props.title} data-services="vkontakte,twitter,facebook">
                        </div>
                    </div>
                    <div className="block">
                        <YandexShare content={{ title: this.props.title, image: this.props.img, url: this.props.img, description: this.props.description }}
                            theme={{ services: 'vkontakte,facebook,twitter' }} />
                            <div className = "wisStats">
                        <span className='stats'><img src={Like} width={20} /> 2</span>
                        <span className='stats'><img src={Comment} width={20} /> 3</span>

                            </div>
                    </div>
                </Bounce>
            </div>
        )
    }
}
