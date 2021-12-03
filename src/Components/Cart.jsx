import React, { Component } from "react";
import "../Cart.css";

class Cart extends React.Component {
  state = {
    products: [],
    coupon: "",
    subtotal: 0,
    total: 0,
  };
  componentDidMount() {
    localStorage.setItem(
      "data",
      JSON.stringify([
        {
          id: 1,
          img: "",
          itemName: "laptop",
          price: 2,
          counter: 1,
          subtotal: 2,
        },
        {
          id: 2,
          img: "",
          itemName: "alfds",
          price: 2,
          counter: 1,
          subtotal: 2,
        },
      ])
    );
    localStorage.setItem("coupon", "cat");
    localStorage.setItem("subTotal", "0");

    this.setState({ products: JSON.parse(localStorage.getItem("data")) });

    setTimeout(() => {
      this.subTotal();
    }, 500);
  }

  increment = (product) => {
    let index = this.state.products.indexOf(product);
    let newProducts = this.state.products;
    newProducts[index].counter++;
    newProducts[index].subtotal =
      newProducts[index].subtotal + newProducts[index].price;
    this.setState({ products: newProducts });
    this.subTotal();
    localStorage.setItem("data", JSON.stringify(newProducts));
  };

  decrement = (product) => {
    let index = this.state.products.indexOf(product);
    let newProducts = this.state.products;
    newProducts[index].counter--;
    newProducts[index].subtotal =
      newProducts[index].subtotal - newProducts[index].price;
    this.setState({ product: newProducts });
    this.subTotal();
    localStorage.setItem("data", JSON.stringify(newProducts));
  };

  subTotal = () => {
    let sum = 0;
    this.state.products?.forEach((product) => (sum = sum + product.subtotal));
    this.setState({ subtotal: sum });
    this.setState({ total: sum });
    localStorage.setItem("subTotal", JSON.stringify(sum));
  };

  handleDelete = (product) => {
    const newProducts = this.state.products.filter(
      (el) => el.id !== product.id
    );
    this.setState({ products: newProducts });
    localStorage.setItem("data", JSON.stringify(newProducts));
  };
  couponInputHandler = (event) => {
    this.setState({ coupon: event.target.value });
  };
  couponButtonHandler = () => {
    this.couponDiscount();
  };
  couponDiscount = () => {
    if (this.state.subtotal !== this.state.total) return;
    if (this.state.coupon == localStorage.getItem("coupon")) {
      let newSubTotal = this.state.subtotal - this.state.subtotal * 0.2;
      this.setState({ subtotal: newSubTotal });
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
              {this.state.products.map((product) => (
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
                  <td>{product.price}</td>

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

                  <td>{product.subtotal}</td>
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
                  <td>{this.state.total}</td>
                </tr>
                <tr>
                  <td className="table-td">Total</td>
                  <td>{this.state.subtotal}</td>
                </tr>
              </table>
              <button className="table-button">Proceed to checkout</button>
            </div>
          </div>
        </section>
      );
    } else {
      return (
        <div className="empty-container">
          <div>You Cart is empty</div>
          <button className="table-button3">Back to shopping</button>
        </div>
      );
    }
  }
}

export default Cart;
