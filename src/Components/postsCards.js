import React, { Component } from 'react'
import CardHeading from './cardHeading'
import CardText from './textArea'
import Image from './cardImage'



class Card extends Component {

    

    deleteCard =() =>{
        this.props.deleteCard(this.props.num)
    }
 
    render() {
        return (
            <div className = 'shop-card shop-text-center'>

                <CardHeading className = {this.props.className1} heading={this.props.cards[this.props.index].itemName} />
                <CardText className = {this.props.className2} text1 = {this.props.cards[this.props.index].text} />
                <Image
                 src = {this.props.cards[this.props.index].src}
                 alt = {this.props.cards[this.props.index].alt}
                 className = 'shop-card-img'
                />

                 <br/>

                {/* Delete Button Showed only For admin */}

                 {this.props.showDelete&&
                 <button className="deleteBtn" onClick={this.deleteCard}>Delete Card</button>
                 }

            </div>

        )
    }
}


export default Card;