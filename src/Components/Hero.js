import React, { Component } from 'react';
import bgImg from './accounts-assets/bg.jpg'
import '../hero.css';

export class Hero extends Component {
    render() {
        switch(window.location.pathname){
            case "/admin":
                title="Admin Dashboard";
                break;
            case "/shop":
                title="Shop Page"
                break;
            case "/account":
                title="Account Page"
                break;
            case "/cart":
                title="Cart Page";
                break;
            case "/checkout":
                title="Checkout Page"
                break;
            default:
                title="Page not Found !"
        }
        return (
            <div className="hero-bg">
                <div><p>{this.props.title}</p></div>
            </div>
        )
    }
}
let title
export default Hero
