import React, { Component } from 'react'

export default class CardImg extends Component {
    constructor(props){
        super(props)
        this.state = {
            display:"block",
            fontSize: "16px"
            
        }
    }

    handleClick = () => {
        this.setState({
             display: this.state.display ==="block" ? "none" : "block"
             })
    }

    render() {
        return (
            <img alt = {this.props.alt} className ={this.props.className} style={{display:this.setState.display}} />
        )
    }
}
