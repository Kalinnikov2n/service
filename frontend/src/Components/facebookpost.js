import React from "react";



class FacebookPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img: '',
            comments:'',
            likes:""
        }
    }

    
    async componentDidMount ()  {
        await window.FB.api(`/${this.props.id}?fields=full_picture`, (response)=> {
            if (!response || response.error) {
            } else {
            //  console.log(response)
             this.setState({img: response.full_picture})
            }
          });
          await window.FB.api(`/${this.props.id}/comments`, (response)=> {
            if (!response || response.error) {
            } else {
            //  console.log(response)
             this.setState({comments: response.data.length})
            }
          });
          await window.FB.api(`/${this.props.id}/likes`, (response)=> {
            if (!response || response.error) {
            } else {
             console.log(response)
             this.setState({likes: response.data.length})
            }
          });
        
        }
        
        
        
   
    
    render() {
        return (
            <div>
               {/* <img src= {this.state.img}/> */}
               <div>{this.state.likes}</div>
               <div>{this.state.comments}</div>
            </div>
        )
    }
}

export default FacebookPost