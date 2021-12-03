import React, { Component } from 'react';
import '../HomeAssets/Testimonials.css';
import image1 from '../HomeAssets/im6.jpg'

class Testimonial extends Component{
render(){
this.state=[{name:'Ahmad rami',text:'‟Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim„',image:'im6.jpg'},
{name:'Jack peter',text:'‟Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim „',image:'im23.jpg'},
{name:'Ali naser',text:'‟Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim „',image:'im21.jpg'},
{name:'kristeen',text:'‟Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim „',image:'im20.jpg'},

];

return(
    <div className="testimonialContainer">
        <h2>Testimonials</h2>
        
        <div className="testimonials" >
        {this.state.map((teamInfo)=>{
            return(
    <div className="people">
    <img width="100%"  src={teamInfo.image}/>
    <h3>{teamInfo.name}</h3>
    <p>{teamInfo.text}</p>
    
    </div>
    
    )
    })}
    </div>
    
    </div>);}}

;export default Testimonial





