import React, { Component } from 'react'
import CardsContainter from '../Components/cardsContainter'
import AddField from '../Components/addField'
import UsersContainer from '../Components/usersContainer'
import '../navBar.css'
import Submitted from '../Components/Submitted'
import Products from '../Components/Products'
import Hero from '../Components/Hero'

export default class Admin extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             items:JSON.parse(localStorage.getItem("items")),
        }
    }

    deleteCard=(index1)=>{
        this.deleted = JSON.parse(localStorage.getItem("items"),);
        this.deleted.splice(index1,1);
        localStorage.setItem("items",JSON.stringify(this.deleted))
        this.setState({
            items : JSON.parse(localStorage.getItem("items"),)
        })
    }
    
    

    handleFormSubmit =()=>{
        this.setState({
            items :  JSON.parse(localStorage.getItem("items")),
        })
    }

    render() {
        return (
            <>
                <AddField handleFormSubmit={this.handleFormSubmit} />
                <br/>
                <Products showDelete={true} items={this.state.items} deleteCard={this.deleteCard} />
                <UsersContainer />
                <Submitted/>
            </>
        )
    }
}

