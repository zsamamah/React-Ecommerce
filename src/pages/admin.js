import React, { Component } from 'react'
import CardsContainter from '../Components/cardsContainter'
import AddField from '../Components/addField'
import UsersContainer from '../Components/usersContainer'
import '../navBar.css'

export default class Admin extends Component {

    constructor(props){
        super(props)
        this.state={
            cards : JSON.parse(localStorage.getItem("items")),
        }
    }

    deleteCard=(index1)=>{
        this.deleted = JSON.parse(localStorage.getItem("items"),);
        this.deleted.splice(index1,1);
        localStorage.setItem("items",JSON.stringify(this.deleted))
        this.setState({
            cards : JSON.parse(localStorage.getItem("items"),)
        })
    }

    handleFormSubmit =()=>{
        this.setState({
            cards :  JSON.parse(localStorage.getItem("items"),),
        })
    }

    render() {
        return (
            <>
                <AddField handleFormSubmit={this.handleFormSubmit} />
                <br/>
                <CardsContainter
                    showDelete={true}
                    deleteCard={this.deleteCard}
                    cards={this.state.cards}
                    conClassName="cards_container"
                />
                <UsersContainer />
            </>
        )
    }
}
