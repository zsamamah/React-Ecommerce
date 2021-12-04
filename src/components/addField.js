import React, { Component } from 'react'

export default class AddField extends Component {



    addItem = (e) =>{
        e.preventDefault()
        let cardStorage=[];
        !localStorage.getItem('items')?localStorage.setItem('items',JSON.stringify(cardStorage)):cardStorage=JSON.parse(localStorage.getItem('items'));
        cardStorage = cardStorage?cardStorage:JSON.parse(localStorage.getItem('items'));
        cardStorage.push({
            itemName:e.target.heading.value ,
            text:e.target.text.value ,
            img:e.target.image.value,
            alt:e.target.alt.value,
            price:e.target.price.value,
            id:e.target.id.value,
        });
        localStorage.setItem("items",JSON.stringify(cardStorage))
        
        this.props.handleFormSubmit();


    }


    render() {
        return (
            <form className="AddForm" onSubmit={this.addItem}>
                <input required type='text' name="heading" placeholder='Product Name' />
                <input required type='text' name="text" placeholder='Product Description' />
                <input required type='url' name="image" placeholder='Image URL' />
                <input required type='text' name="alt" placeholder='Alt for Image' />
                <input required type='number' name="price" placeholder='Enter Price' />
                <input required type='number' name="id" placeholder='Enter Product ID' />
                <button type="submit">Add Card</button>
            </form>



        )
    }
}



