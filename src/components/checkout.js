import React, { Component } from 'react'
import {countries} from './countries.'
import { Link } from "react-router-dom";
import '../checkout.css'

export default class Checkout extends Component {
    constructor(props){
        super(props)
        this.state={
            loggedIn:JSON.parse(localStorage.getItem('loggedIn')),
            cashMsg1:'flex',
            cashMsg2:'none',
            redirect:null,
        }
        this.order=JSON.parse(localStorage.getItem('order'));

    }


    handleSubmit=(e)=>{
        e.preventDefault()
        this.checkoutInfo={
            // firstName:e.target.fName.value,
            // lastName:e.target.lName.value,
            country:e.target.country.value,
            streetAddress:e.target.streetAddress.value,
            town:e.target.town.value,
            state: e.target.state.value,
            zip: e.target.zip.value,
            price:JSON.parse(localStorage.getItem('total')),
            coupon:"cat",
            discount:JSON.parse(localStorage.getItem('total'))-JSON.parse(localStorage.getItem('subTotal')),
            payment: this.state.cashMsg1==="flex"? "Cash":"Credit Card",
            status:"Pending"
        }

        
        let ordersArr =JSON.parse(localStorage.getItem('submittedOrders'));
        if(ordersArr){
            ordersArr.push(this.checkoutInfo)
            localStorage.setItem('submittedOrders',JSON.stringify(ordersArr));
            console.log(ordersArr,1)
        }else{
            localStorage.setItem('submittedOrders',JSON.stringify([this.checkoutInfo]));
            console.log(ordersArr,2)
        }
        localStorage.removeItem('order');
        localStorage.removeItem('subTotal');
        localStorage.removeItem('total');
        localStorage.removeItem('discount');
        localStorage.removeItem('coupon');
        this.setState({redirect:true});
    }

    handlePayment= (e)=>{
        e.target.value==="cash"?this.setState({cashMsg1:"flex",cashMsg2:'none'}):this.setState({cashMsg1:'none',cashMsg2:'flex'})
    }

    totalPrice = ()=>{
        let sum=0;
        for(let obj of this.order){
            sum+=obj.counter*obj.price;
        }
        return sum;
    }
    render() {
        if(this.state.redirect)
        return (
            <div className="empty-container">
            <div>Your order is submitted, it will be delivered within 2 to three weeks!</div>
            <div className="checkout-orderDetails">
                <ul>
                    {/* {()=>{
                        for(let prop of this.checkoutInfo){
                            return (
                                <li>{prop}</li>
                            )
                        }
                    }} */}
                </ul>
            </div>
            <Link to="/shop">
              <button className="table-button3">continue shopping</button>
            </Link>
          </div>
        )

        if(this.order)
        return (
            <div className='checkout-container'>
                    <form action='' onSubmit={this.handleSubmit}>
                        <div className='checkout-left'>
                                <div className='left-container'>

                                <h3>Billing details</h3>
                                <div className='checkout-adjacent'>
                                    <label>
                                        <p>First Name:</p>
                                        {/* <input type="text" name="fName" onChange={this.handleChange}></input>{this.state.loggedIn[0]} */}
                                    </label>
                                    <label>
                                        <p>Last Name:</p>
                                        {/* <input type="text" name="lName" onChange={this.handleChange}></input>{this.state.loggedIn[1]} */}
                                    </label>
                                </div>
                                <label>
                                    <p>Country/Region</p>
                                    <select required name="country">

                                        {countries.map((element,i)=>{return<option key={i}>{element.name}</option>
                                        })}
                                    </select>
                                </label>
                                <label>
                                    <p>Street Adress:</p>
                                    <input required type="text" name="streetAddress"></input>
                                </label>
                                <label>
                                    <p>Town/City</p>
                                    <input required type="text" name="town"></input>
                                </label>
                                <label>
                                    <p>State/Governorate</p>
                                    <input required type="text" name="state"></input>
                                </label>
                                <label>
                                    <p>Postcode / ZIP</p>
                                    <input required type="text" name="zip"></input>
                                </label>
                                {/* <label>
                                    <p>Phone</p>
                                    <input required type="text">{this.state.loggedIn[3]}</input>
                                    </label>
                                    <label>
                                    <p>Email address</p>
                                    <input required type="text">{this.state.loggedIn[2]}</input>
                                </label> */}
                            </div>
                        </div>
                <div className='checkout-right'>
                    <div className="checkout-summary">
                        <table>
                            <thead>
                                <tr className="table-grey">
                                    <th >Product</th>
                                    <th >Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>   
                                {this.order.map((element,i)=>
                                    <tr>
                                    <td>{element.itemName}</td>
                                    <td>JOD ${element.price*element.counter}</td>
                                    </tr>
                                    )}
                                <tr>
                                    <td className="table-grey">Subtotal</td>
                                    <td>{this.totalPrice()}</td>
                                </tr>
                                <tr>
                                    <td className="table-grey">Total</td>
                                    <td>{JSON.parse(localStorage.getItem('total'))}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="checkout-payment">
                        <div className='radios'>
                            <input onChange={this.handlePayment} type="radio" name="method" id="cash" value="cash" selected={true}/>
                            <label htmlFor="cash">Cash on delivery</label>
                        </div>
                        <div className="payment-msg-container">
                            <p className="payment-msg" id="one" style={{display:this.state.cashMsg1}}>Pay with cash upon delivery</p>
                        </div>
                        <div className='radios'>
                            <input onChange={this.handlePayment} type="radio" name="method" id="credit-cards"/>
                            <label htmlFor="credit-cards" >Credit Card</label>
                        </div>
                        <div className="payment-msg-container1">


                            <div className="payment-msg" id="two" style={{display:this.state.cashMsg2}}>
                                <label>
                                    <p>Card Number</p>
                                    <input type="number" placeholder='xxxx-xxxx-xxxx-xxxx'></input>
                                </label>
                                <label>
                                    <p>Name on card</p>
                                    <input type="text" placeholder='First Last'></input>
                                </label>
                                <label>
                                    <p>Expiry Date</p>
                                    <input type="month" placeholder='Month Year'></input>
                                </label>
                            </div>
                        </div>
                        <div className="orderBtn">
                            <button type="submit" id="placeOrder">Place Order</button>
                        </div>
                    </div>

                </div>
                </form>
            </div>
        )
        else
        return(
            <div className="empty-container">
            <div>You Cart is empty</div>
            <Link to="/shop">
              <button className="table-button3">Back to shopping</button>
            </Link>
          </div>
        )
    }
}
