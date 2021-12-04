import React, { Component } from 'react';
import Products from './Products';
import "../Shop.css"


export class Shop extends Component {
    render() {
        return (
            <div >
                <div className='shop-section'>
                    <img src='https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='labtop background' className='shop-bg' />
                </div>
                <div className='shop-container'>
                    <Products />
                </div>
            </div>
        )
    }
}

export default Shop
