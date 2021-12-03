import React, { Component } from 'react';
import '../HomeAssets/Ourteam.css';
import  '../HomeAssets/im1.jpg'
class Team extends Component{
render(){
this.state=[{name:'Zaid samammaah',title:'Scrum master',image:'im11.jpg'},
{name:'Shahed khalayleh',title:'Product owner',image:'im10.webp'},
{name:'Kholoud khraisat',title:'Web developer',image:'im1.jpg'},
{name:'Rahaf arafeh',title:'Web developer',image:'im12.webp'},
{name:'Sanad khamash',title:'Web developer',image:'im16.jpg'}
];

     return(
<div className="cardContainer">
    <h2>Our Team</h2>
    <p>lorem ipsum llfmlamfolqmwflmsfsfl</p>
    <div className="memberContainer" >
    {this.state.map((teamInfo)=>{
        return(
<div className="members">
<img width="100%"  src={teamInfo.image}/>
<h3>{teamInfo.name}</h3>
<p>{teamInfo.title}</p>
<a href="https://www.facebook.com/"  class="fab fa-facebook-square" ></a>

</div>

)
})}
</div>

</div>);}}
;export default Team

        

