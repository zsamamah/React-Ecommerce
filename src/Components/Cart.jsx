import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Cart.css";

class Cart extends React.Component {
  state = {
    products: JSON.parse(localStorage.getItem('order')),
    coupon: "",
    subtotal: JSON.parse(localStorage.getItem('subTotal')),
    total: JSON.parse(localStorage.getItem('total')),
    discounted:JSON.parse(localStorage.getItem('discount')),
  };
   async componentDidMount() {
    await this.subTotal();
    localStorage.setItem("coupon", "cat");
    if(!this.state.discounted)
    localStorage.setItem("discount",JSON.stringify(false))
    if(!localStorage.getItem('total')){
      localStorage.setItem("total", JSON.stringify(this.state.subtotal));
      this.setState({total:JSON.parse(localStorage.getItem('total')),})
    }
  }

  increment = async (product) => {
    let index;
    let prd = JSON.parse(localStorage.getItem('order'))
    for (let obj of prd){
      if(obj.id===product.id)
        index = prd.indexOf(obj)
    }
    prd[index].counter += 1;
    localStorage.setItem("order",JSON.stringify(prd));
    await this.setState({products:JSON.parse(localStorage.getItem('order'))})
    this.subTotal();
  };

  decrement = async (product) => {
    let index;
    let prd = JSON.parse(localStorage.getItem('order'))
    for (let obj of prd){
      if(obj.id===product.id)
        index = prd.indexOf(obj)
    }
    prd[index].counter -= 1;
    localStorage.setItem("order",JSON.stringify(prd));
    await this.setState({products:JSON.parse(localStorage.getItem('order'))})
    this.subTotal();
  };

  subTotal = async () => {
    let sum = 0;
    // this.state.products?.forEach((product) => (sum = sum + (product.counter*product.price)));
    if(this.state.products)
    this.state.products.forEach((product) => (sum = sum + (product.counter*product.price)));
    localStorage.setItem("subTotal", JSON.stringify(sum));
    this.setState({ subtotal: sum });
    if(!this.state.discounted)
    await this.setState({ total: sum });
    else
      await this.setState({total: (0.8*this.state.subtotal)});
      localStorage.setItem("total",JSON.stringify(this.state.total))


  };

  handleDelete = async(product) => {
    const newProducts = this.state.products.filter(
      (el) => el.id !== product.id
    );
    await this.setState({ products: newProducts });
    localStorage.setItem("order", JSON.stringify(newProducts));
    this.subTotal();

  };
  couponInputHandler = (event) => {
    this.setState({ coupon: event.target.value });
  };
  couponButtonHandler = () => {
    this.couponDiscount();
  };
  couponDiscount = async () => {
    if (this.state.subtotal !== this.state.total) return;
    if (this.state.coupon == localStorage.getItem("coupon")) {
      let newSubTotal = this.state.total - this.state.total * 0.2;
      localStorage.setItem('total',JSON.stringify(newSubTotal))
      this.setState({ total: newSubTotal });
      await this.setState({discounted:true});
      localStorage.setItem("discount",JSON.stringify(this.state.discounted))

    }
  };
  render() {
    if (this.state.products) {
      return (
        <section className="cart-container">
          <table className="table">
            <thead className="table-head">
              <tr>
                <th></th>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {JSON.parse(localStorage.getItem("order")).map((product) => (
                <tr>
                  <td>
                    <button
                      className="table-button2"
                      onClick={() => this.handleDelete(product)}
                    >
                      x
                    </button>
                  </td>
                  <td>
                    <img src={product.img} />
                  </td>
                  <td>{product.itemName}</td>
                  <td>JOD {product.price}</td>

                  <td>
                    <button
                      className="table-button2"
                      onClick={() => this.decrement(product)}
                      disabled={product.counter === 1}
                    >
                      -
                    </button>
                    {product.counter}
                    <button
                      className="table-button"
                      onClick={() => this.increment(product)}
                    >
                      +
                    </button>
                  </td>

                  <td>JOD {product.price*product.counter}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="table-footer">
            <input
              type="text"
              className="table-input"
              placeholder="Coupon Code"
              onKeyUp={(event) => this.couponInputHandler(event)}
            />
            <button
              className="table-btn"
              onClick={() => this.couponButtonHandler()}
            >
              Apply coupon
            </button>
          </div>

          <div className="cart-total">
            <div className="cart-totals">
              <h3>Cart Totals</h3>
              <table className="table-total">
                <tr>
                  <td className="table-td">Subtotal</td>
                  <td>{this.state.subtotal}</td>
                </tr>
                <tr>
                  <td className="table-td">Total</td>
                  <td>{this.state.total}</td>
                </tr>
              </table>
              <Link to="/checkout">
                <button className="table-button">Proceed to checkout</button>
              </Link>
            </div>
          </div>
        </section>
      );
    } else {
      return (
        <div className="empty-container">
          <div>You Cart is empty</div>
          <Link to="/shop">
            <button className="table-button3">Back to shopping</button>
          </Link>
        </div>
      );
    }
  }
}

export default Cart;


