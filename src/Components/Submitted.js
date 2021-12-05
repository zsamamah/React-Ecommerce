import React, { Component } from "react";

class Submitted extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             status: JSON.parse(localStorage.getItem("submittedOrders"))
        }
    }
    
    handleChangeRole=  (e,i)=>{
        let array1=this.state.status
        array1[i].status=e.target.value;
        localStorage.setItem("submittedOrders",JSON.stringify(array1));
        this.setState({status:array1})
    }
  render() {
    return (
      <div>
        {JSON.parse(localStorage.getItem("submittedOrders")).map(
          (order, indx) => {
            return (
              <div>
                <div>
                    Full Name : 
                    {order.fname} {order.lname}
                </div>
                <div>
                    Email Address : {order.email}
                </div>
                <div>
                   Phone number :  {order.phone}
                </div>
                <div>
                   <table>
                      <tr>
                        <td>{order.orders.itemName}</td>
                        <td>{order.orders.price}</td>
                      </tr>
                    </table>
                    
                </div>
                <div>
                    Payment Method : {order.payment} <br/>
                    Subtotal : {order.subTotal} <br/>
                    Coupon : {order.coupon} <br/>
                    Discount : {order.discount} <br/>
                    Total : {order.price}
                </div>
                <div>
                    Deliver to : 
                    {order.country} , {order.state} , {order.streetAddress}
                </div>
                <div>
                <select value={order.status}  name="status" onChange={(e)=>this.handleChangeRole(e,indx)}>
                        <option value={order.status}>{order.status}</option>
                        <option value={order.status==="Pending"? "Delivered":"Pending"}>{order.status==="Delivered"? "Pending":"Delivered"}</option>
                </select>
                </div>
              </div>
            );
          }
        )}
      </div>
    );
  }
}

export default Submitted;
