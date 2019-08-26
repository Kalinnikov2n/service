import React, { Component } from 'react'

export default class Instagram extends Component {
    componentDidMount = async() => {
        window.location.replace("http://localhost:3101/instagram")
        const resp = await fetch("/instagramtoken")
        const data = await resp.json()
        console.log(data)
    }
    render() {
        return (
            <div>
            
            </div>
        )
    }
}
