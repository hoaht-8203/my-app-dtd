import React, { Component } from 'react';
import ProductItem from './ProductItem';

class ProductList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            productList: [
                {
                    id: '1a',
                    name: 'Television',
                    avatar: '📺',
                },
                {
                    id: '2b',
                    name: 'Telephone',
                    avatar: '📱',
                },
                {
                    id: '3c',
                    name: 'Clothes',
                    avatar: '👖',
                },
            ],
        };
    }

    render() {
        return (
            <div>
                <h1>Product List</h1>
                <div className="product-list">
                    {this.state.productList.map((product) => (
                        <ProductItem product={product} key={product.id} />
                    ))}
                </div>
            </div>
        );
    }
}

export default ProductList;
