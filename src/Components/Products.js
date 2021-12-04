import React, { Component } from 'react';
import ProductItem from './ProductItem';

export class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: JSON.parse(localStorage.getItem('items')),
        }
    }


    render() {
        if (!localStorage.getItem('items')) {
            return (<h1 className='shop-text-center'>No Products Yet!</h1>);
        } else
            return (
                <div className='shop-card-grid'>
                    {
                        this.state.items.map(item => {
                            return <ProductItem key={item.id} item={item} />
                        })
                    }
                </div>
            )
    }
}

export default Products



