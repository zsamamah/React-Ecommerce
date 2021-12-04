import React, { Component } from 'react'

export default class TextArea extends Component {
    render() {
        return (
            <p className = {this.props.className} >{this.props.text1}</p>
        )
    }
}
