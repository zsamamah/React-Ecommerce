import React, { Component } from 'react'
import {countries} from './countries.'
import '../checkout.css'

export default class Checkout extends Component {
    constructor(props){
        super(props)
        this.state={
            loggedIn:JSON.parse(localStorage.getItem('loggedIn')),
            cashMsg1:'flex',
            cashMsg2:'none'
        }
        this.order=JSON.parse(localStorage.getItem('order'));
    }


    handleSubmit=(e)=>{
        let checkoutInfo={
            // firstName:e.target.fName.value,
            // lastName:e.target.lName.value,
            country:e.target.country.value,
            streetAddress:e.target.streetAddress.value,
            town:e.target.town.value,
            state: e.target.state.value,
            zip: e.target.zip.value,
            // price:this.order.finalPrice,
            // coupon:this.order.coupon,
            // discount:this.order.discount,
            payment: this.state.cashMsg1==="flex"? "Cash":"Credit Card",
            status:"Pending"
        }

        
        let ordersArr =JSON.parse(localStorage.getItem('orders'));
        if(ordersArr){
            ordersArr.push(checkoutInfo)
            localStorage.setItem('orders',JSON.stringify(ordersArr));
        }else{
            localStorage.setItem('order',JSON.stringify([checkoutInfo]));
        }
    }

    handlePayment= (e)=>{
        e.target.value=="cash"?this.setState({cashMsg1:"flex",cashMsg2:'none'}):this.setState({cashMsg1:'none',cashMsg2:'flex'})
    }

    totalPrice = ()=>{
        let sum=0;
        for(let obj of this.order){
            sum+=obj.counter*obj.price;
        }
        return sum;
    }
    render() {
        return (
            <div className='checkout-container'>
                    <form onSubmit={this.handleSubmit}>
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
    }
}
