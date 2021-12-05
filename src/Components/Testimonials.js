import React, { Component } from 'react';
import '../HomeAssets/Testimonials.css';
import image1 from '../HomeAssets/im6.jpg'

class Testimonial extends Component{
render(){
this.state=[,
{name:'Jack peter',text:'‟I am very happy with my first experience with Platinum. The product was amazing thanks i will order again „',image:'im23.jpg'},
{name:'Ali naser',text:'‟This is my third order. Always on time. The product as seen and expected. Costumer service are prompt and helpful „',image:'im21.jpg'},
{name:'kristeen',text:'‟Ordered several times n always satisfied with my purchases. Variety of collections with reasonable prices„',image:'im20.jpg'},

];

return(
    <div className="testimonialContainer">
        <h2>Testimonials</h2>
        
        <div className="testimonials" >
        {this.state.map((teamInfo)=>{
            return(
    <div className="people">
    <img width="100%"  src={teamInfo.image}/>
    <h4>{teamInfo.name}</h4>
    <p>{teamInfo.text}</p>
    
    </div>
    
    )
    })}
    </div>
    
    </div>);}}

;export default Testimonial





