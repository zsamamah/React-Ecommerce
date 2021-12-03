import React, { Component } from 'react'

export default class AddField extends Component {



    addItem = (e) =>{
        e.preventDefault()
        let cardStorage=[];
        !localStorage.getItem('cards')?localStorage.setItem('cards',JSON.stringify(cardStorage)):cardStorage=JSON.parse(localStorage.getItem('cards'));
        cardStorage = cardStorage?cardStorage:JSON.parse(localStorage.getItem('cards'));
        cardStorage.push({
            name:e.target.heading.value ,
            text:e.target.text.value ,
            src:e.target.image.value,
            alt:e.target.alt.value,
        });
        localStorage.setItem("cards",JSON.stringify(cardStorage))
        
        this.props.handleFormSubmit();


    }


    render() {
        return (
            <form className="AddForm" onSubmit={this.addItem}>
                <input required type='text' name="heading" placeholder='Card Heading' />
                <input required type='text' name="text" placeholder='Card Description' />
                <input type='text' name="image" placeholder='Image URL' />
                <input type='text' name="alt" placeholder='Alt for Image' />
                <button type="submit">Add Card</button>
            </form>

        )
    }
}



