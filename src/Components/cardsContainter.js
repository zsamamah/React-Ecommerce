import React, { Component } from 'react'
import PostsCards from './postsCards'

export default class CardsContainter extends Component {


    render() {
        if(this.props.cards)
        this.cards=this.props.cards.map((obj, indx) =>
        <>
            <PostsCards 
            key={indx} 
            num={indx}
            {...obj} 
            deleteCard={this.props.deleteCard}
            showDelete={this.props.showDelete}
            cards = {this.props.cards}
            index={indx}
            />
            <br/>
         </>
        )

        return (
            <div className = {this.props.conClassName}>
                {this.cards}
            </div>
        )
    }
}


