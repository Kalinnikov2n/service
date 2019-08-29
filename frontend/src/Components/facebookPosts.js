import React from "react";
import { connect } from "react-redux";


class FacebookPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: '',
        }
    }

    
    async componentDidMount ()  {
        console.log(this.props.id, "user")
        await window.FB.api(`/${this.props.id}/feed`, (response)=> {
            if (!response || response.error) {
            } else {
             console.log(response)
             this.setState({posts: response.data})
            }
          });
        }
   
    
    render() {
        console.log(this.state.posts)
        return (
            <div>
               ho
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    id: state.facebookId
  })

export default connect(
    mapStateToProps
)(FacebookPosts)