import React, { Component } from 'react';
import VKPost from './VKPost';

class VK extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      value: [],
    }
  }

  // componentDidMount = async () => {
  //   const resp = await fetch('/wallGet', {
  //     credentials: 'include',
  //     headers: {
  //       "Accept": "application/json",
  //       "Content-Type": "application/json"
  //     }
  //   });
  //   const data = await resp.json();
  //   this.setState({ value: data });
  //   console.log(this.state.value)
  // }

  componentDidMount = async () => {
    const resp = await fetch('/vkCheckToken', {
      credentials: 'include',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });
    const data = await resp.json();

    if (data.checkToken) {
      const resp = await fetch('/wallGet', {
        credentials: 'include',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      });
      const data = await resp.json();
      this.setState({ value: data });
    } else {
      window.location.replace('http://localhost:3101/oauth');
    }
  }

  render() {
    return (
      <div>
        {this.state.value.map((item, index) =>
          <VKPost post={item} key={index} />
        )}
      </div>
    )
  }
}



export default VK;
