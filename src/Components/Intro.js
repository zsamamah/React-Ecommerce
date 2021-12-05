import React from "react";
import { Component } from "react";
import "../Intro.css";
import { Link } from "react-router-dom";

class Intro extends Component {
  render() {
    return (
      <div className="intro">
        <div className="intro-contents">
          <h1 class="intro-h">Platinum store</h1>
          <p class="intro-p">
            Platinum is a store of computers, mobile devices and accessories in
            Jordan. Our advantages strong execlusive offers on the latest
            products and shipping your purchases.
          </p>
          <Link to="/shop">
            <button className="intro-button">Shop Now !</button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Intro;