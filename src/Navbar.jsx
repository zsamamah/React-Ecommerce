import { render } from "@testing-library/react";
import { NavLink, Link } from "react-router-dom";
import React from "react";
import './NavBar.css.css'


class Navbar extends React.Component{

      constructor(props){
            super(props)
            this.state={
                  loggedin:localStorage.getItem("logged_in")
            }
      }
  
      // componentDidMount() {
      // window.addEventListener('scroll', handleScroll());
      // }
        
      // componentWillUnmount() {
      // window.removeEventListener('scroll', handleScroll());
      // }
        
      // handleScroll (event) {
      //       let nav= document.getElementById('navBar');
      //       // let scrollTop = event.srcElement.body.scrollTop;
      //       nav.style.backgroundColor = "white"; 
      //       console.log("sanad")   
      // }

      render(){
      return(
      <nav id="navBar" className="navbar navbar-expand-lg navbar-light fixed-top ">
      <div className="container">
      <a className="navbar-brand">IMG HERE</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
            <Link to="/account" className="nav-link">
                  {this.state.loggedin?"Account":"Login"}</Link>
            </li>
            <li className="nav-item">
            <Link to="/cart" className="nav-link">Cart</Link>
            </li>
            <li className="nav-item">
            <Link to="/checkout" className="nav-link">Checkout</Link>
            </li>
            </ul>
      </div>
      </div>
      </nav>

      )
}
}

export default Navbar;