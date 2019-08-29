import React from "react";
import { connect } from "react-redux";
import { addUser, addId } from '../redux/actions';
import FacebookPost from './facebookpost';

class FacebookPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: '',
        }
    }

    
    async componentDidMount ()  {
        await window.FB.api(`/${this.props.id}/feed`, (response)=> {
            if (!response || response.error) {
            } else {
            //  console.log(response.data[0])
             this.setState({posts: response.data})
            }
          });
        }
   
    
    render() {
        // console.log(this.state.posts)
        return (
            <div>
                {/* <FacebookPost id={this.props.posts.id}/> */}
               {this.state.posts ?  this.state.posts.map(el=>(<FacebookPost id={el.id}/>)): null}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    id: state.user.facebookId,
    user: state.user.login
  })
export default connect(
    mapStateToProps
)(FacebookPosts)