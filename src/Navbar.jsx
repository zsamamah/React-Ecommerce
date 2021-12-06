import { render } from "@testing-library/react";
import { NavLink, Link } from "react-router-dom";
import React from "react";
import './NavBar.css.css';
import $ from 'jquery';
import logo from './logo.png'


class Navbar extends React.Component{

      constructor(props){
            super(props)
            this.state={
                  loggedin:localStorage.getItem("logged_in")
            }
      }
  
      componentDidMount() {
            $(window).scroll(function(){

                  if($(this).scrollTop()>=50){
                      $("#navBar").addClass("noTransparrent");
                      $(".casting-color").removeClass("text-light");
                   }
                  else{
                      $("#navBar").removeClass("noTransparrent");
                      $(".casting-color").addClass("text-light");
                   }
      
              });
      }

      render(){
      return(
      <nav id="navBar" className="navbar navbar-expand-lg navbar-light fixed-top ">
      <div className="container">
      <Link to="/" className="navbar-brand"><img src={logo} alt="logo"/></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 casting-color" id="custom-ul">
            <li className="nav-item">
            <Link to="/" className="nav-link text-light casting-color active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
            <Link to="/shop" className="nav-link text-light casting-color">
                  Shop</Link>
            </li>
            <li className="nav-item">
            <Link to="/account" className="nav-link text-light casting-color">
                  {this.state.loggedin?"Account":"Login"}</Link>
            </li>
            <li className="nav-item">
            <Link to="/cart" className="nav-link text-light casting-color">Cart</Link>
            </li>
            {/* <li className="nav-item">
            <Link to="/checkout" className="nav-link text-light casting-color">Checkout</Link>
            </li> */}
            </ul>
      </div>
      </div>
      </nav>

      )
}
}

export default Navbar;