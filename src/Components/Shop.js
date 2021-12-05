import React, { Component } from 'react';
import Products from './Products';
import Hero from './Hero';
import "../Shop.css";


export class Shop extends Component {
    render() {
        return (
            <>
            <Hero title="Shop Page"/>
            <div >
                <div className='shop-container'>
                    <Products />
                </div>
            </div>
            </>
        )
    }
}

export default Shop
