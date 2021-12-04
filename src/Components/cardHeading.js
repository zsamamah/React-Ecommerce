import React, { Component } from 'react'

export default class CardHeading extends Component {
    render() {
        return (
            <h1 className = {this.props.className}>{this.props.heading}</h1>
        )
    }
}
