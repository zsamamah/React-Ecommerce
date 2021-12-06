import React, { Component } from "react";
import Products from "./Products";
import Hero from './Hero'
import '../navBar.css'

export default class AddField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: JSON.parse(localStorage.getItem("items")),
      textarea:""
    };
  }

  handleTextArea=(e)=>{
    this.setState({textarea:e.target.value})
  }

  addItem = (e) => {
    e.preventDefault();
    let cardStorage = [];
    !localStorage.getItem("items")
      ? localStorage.setItem("items", JSON.stringify(cardStorage))
      : (cardStorage = JSON.parse(localStorage.getItem("items")));
    cardStorage = cardStorage
      ? cardStorage
      : JSON.parse(localStorage.getItem("items"));
    cardStorage.push({
      itemName: e.target.heading.value,
      text: this.state.textarea,
      img: e.target.image.value,
      alt: e.target.alt.value,
      price: e.target.price.value,
      id: e.target.id.value,
    });
    localStorage.setItem("items", JSON.stringify(cardStorage));
    this.props.handleChangeitem()
  };

  render() {
    return (
      <>
      <Hero title="Add Products"/>
        <form className="AddForm" onSubmit={this.addItem}>
          <input
            required
            type="text"
            name="heading"
            placeholder="Product Name"
          />
          <textarea
            required
            cols="23"
            row="8"
            name="text" value={this.state.textarea}
            placeholder="Product Description" onChange={this.handleTextArea}
          />
          <input required type="url" name="image" placeholder="Image URL" />
          <input required type="text" name="alt" placeholder="Alt for Image" />
          <input
            required
            type="number"
            name="price"
            placeholder="Enter Price"
          />
          <input
            required
            type="number"
            name="id"
            placeholder="Enter Product ID"
          />
          <button type="submit">Add Card</button>
        </form>
        <Products showDelete={true} deleteCard={this.props.deleteCard} items={this.props.items} />

      </>
    );
  }
}
