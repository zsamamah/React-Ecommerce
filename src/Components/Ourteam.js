import React, { Component } from 'react';
import '../HomeAssets/Ourteam.css';
import  '../HomeAssets/im1.jpg'
class Team extends Component{
render(){
this.state=[{name:'Zaid Samammaah',title:'Scrum master',image:'im11.jpg'},
{name:'Shahed khalayleh',title:'Product owner',image:'im10.webp'},
{name:'Kholoud Khraisat',title:'Web developer',image:'im1.jpg'},
{name:'Rahaf Arafeh',title:'Web developer',image:'im12.webp'},
{name:'Sanad Khamash',title:'Web developer',image:'im16.jpg'}
];

     return(
<div className="cardContainer">
    <h2 >Our Team</h2>
    
    <div className="memberContainer" >
    {this.state.map((teamInfo)=>{
        return(
<div className="members">
<img width="100%"  src={teamInfo.image}/>
<h4 >{teamInfo.name}</h4>
<p>{teamInfo.title}</p>
<a id="contactIcon" href="https://www.facebook.com/"  class="fab fa-facebook-f"></a>
<a id="contactIcon"href="https://www.linkedin.com/"  class="fab fa-linkedin-in"></a>
<a id="contactIcon"href="https://www.twitter.com/"  class="fab fa-twitter" ></a>

</div>

)
})}
</div>

</div>);}}
;export default Team

        

