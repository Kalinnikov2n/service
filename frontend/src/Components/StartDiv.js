import React, { Component } from 'react'
import Wis from '../4.png'

export default class StartDiv extends Component {
    render() {
        return (
            <div className = "startDiv">
                <span>Service for monitoring your social activity</span>
                <img src = {Wis} width = "500px"/>
            </div>
        )
    }
}
