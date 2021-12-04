import React ,{Component}from 'react';
import './Service.css'


class Service extends Component{
render(){
    this.state=[{icon:"fas fa-shopping-cart",service:"Easy shopping",description:"lorem ipsum dolor"},{icon:"fas fa-shield-alt",service:"High security",description:"lorem ipsum dolor"},
{icon:"fas fa-dollar-sign",service:"Best Price Locally",description:"lorem ipsum dolor"},{icon:"fas fa-business-time",service:"Technichal support",description:"lorem ipsum dolor"}];


    return(

<div className="serviceContainer">
{this.state.map((serv)=>{
return(
    <div className="serviceList">
<i className={serv.icon} id="icons"></i>
<h2>{serv.service}</h2>
<p>{serv.description}</p>

</div>

)

}

)}

</div>)}

}export default Service