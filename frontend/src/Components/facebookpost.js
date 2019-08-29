import React from "react";
import { bounceInUp } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import Like from '../like.png';
import Comment from '../comment.png';

const Bounce = styled.div`animation: 2s ${keyframes`${bounceInUp}`} `;



class FacebookPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img: '',
            comments: '',
            likes: ""
        }
    }


    async componentDidMount() {
        await window.FB.api(`/${this.props.id}?fields=full_picture`, (response) => {
            if (!response || response.error) {
            } else {
                //  console.log(response)
                this.setState({ img: response.full_picture })
            }
        });
        await window.FB.api(`/${this.props.id}/comments`, (response) => {
            if (!response || response.error) {
            } else {
                //  console.log(response)
                this.setState({ comments: response.data.length })
            }
        });
        await window.FB.api(`/${this.props.id}/likes`, (response) => {
            if (!response || response.error) {
            } else {
                console.log(response)
                this.setState({ likes: response.data.length })
            }
        });

    }





    render() {
        return (
            <div className="posts">
                <Bounce>
                    <div className='inpost'>
                        <div className="imgPic">
                            <img className='picture' src={this.state.img} width="200px" alt="pict" />    
                        </div>
                    </div>
                    <div className='block'>
                        <span className='stats'><img src={Like} width={20} /> {this.state.likes}</span>
                        <span className='stats'><img src={Comment} width={20} /> {this.state.comments}</span>
                    </div>
                </Bounce>
            </div>
        )
    }
}

export default FacebookPost