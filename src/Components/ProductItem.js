import React, { Component } from 'react';



export class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.item.id,
            img: this.props.item.img,
            itemName: this.props.item.itemName,
            price: this.props.item.price,
            counter: 1
        }
    }


    orders = [];
    minuseClick = () => {

        if (this.state.counter === 1) {
            this.setState({ counter: 1 })
        } else {
            this.setState({ counter: this.state.counter - 1 })
        }
    }

    plusClick = () => {
        this.setState({ counter: this.state.counter + 1 });
    }

    toCart = () => {

        let storageProducts = JSON.parse(localStorage.getItem('order'));
        let found = false, index;
        if(storageProducts){

            for (let i = 0; i < storageProducts.length; i++) {
                found = false
                if (storageProducts[i].id === this.state.id) {
                    found = true;
                    index = i;
                    break;
                }
            }
            if (found) {
                storageProducts[index] = this.state
                localStorage.setItem('order', JSON.stringify(storageProducts))
            } else {
                storageProducts.push(this.state);
                localStorage.setItem('order', JSON.stringify(storageProducts));
            }
        }
        else{
            localStorage.setItem('order', JSON.stringify([this.state]))
        }


    }


    render() {
        // const { img, itemName, price } = this.state.;
        return (
            <div>
                <div className='shop-card shop-text-center'>
                    <img src={this.state.img} alt='' className='shop-card-img' />
                    <p className='shop-card-label'>{this.state.itemName}</p>
                    <p className='shop-card-price'>{this.state.price}</p>
                    <div><i class="far fa-minus-square" onClick={this.minuseClick}></i>

                        <p>{this.state.counter}</p>
                        <i class="far fa-plus-square" onClick={this.plusClick}></i></div>
                    <button type='submit' className='shop-card-btn' onClick={this.toCart}>Add To Cart</button>
                </div>
            </div>
        )
    }
}

export default Products



