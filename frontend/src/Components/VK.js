import React, { Component } from 'react';
import VKPost from './VKPost';
import {connect} from 'react-redux'

class VK extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      value: [],
    }
  }


  componentDidMount = async () => {
    const r = await fetch(`http://localhost:3101/try?user=${this.props.user}`);
    const resp = await fetch(`http://localhost:3101/vkCheck`, {
      // credentials: 'include',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });
    const data = await resp.json();

    if (data.checkToken) {
      const resp2 = await fetch('http://localhost:3101/wallGet', {
        // credentials: 'include',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      });
      const data = await resp2.json();
      console.log("pidr")
      console.log(data)
      this.setState({ value: data });
    } else {
      window.location.replace('http://localhost:3101/oauth');
    }
  }

  render() {
    return (
      <div className='socPosts'>
        {this.state.value.map((item, index) =>
           <VKPost post={item} key={index} />
        )}
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    user: state.user.login
  }
}



export default connect(mapStateToProps)(VK)
