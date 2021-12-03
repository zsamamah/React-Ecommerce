import React, { Component } from 'react'
// import CardsContainter from '../components/cardsContainter'
import AddField from '../components/addField'

export default class Admin extends Component {

    constructor(props){
        super(props)
        this.state={
            cards : JSON.parse(localStorage.getItem("cards"),)
        }
    }

    deleteCard=(index1)=>{
        this.deleted = JSON.parse(localStorage.getItem("cards"),);
        this.deleted.splice(index1,1);
        localStorage.setItem("cards",JSON.stringify(this.deleted))
        this.setState({
            cards : JSON.parse(localStorage.getItem("cards"),)
        })
    }

    handleFormSubmit =()=>{
        this.setState({
            cards :  JSON.parse(localStorage.getItem("cards"),),
        })
    }

    render() {
        return (
            <>
                <AddField handleFormSubmit={this.handleFormSubmit} />
                <br/>
                {/* <CardsContainter
                    showDelete={true}
                    deleteCard={this.deleteCard}
                    cards={this.state.cards}
                    conClassName="cards_container"
                /> */}
            </>
        )
    }
}
