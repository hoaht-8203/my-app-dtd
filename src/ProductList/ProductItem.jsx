import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        const { product } = this.props;
        return (
            <div className="product-item" key={product.id}>
                <h3>
                    {product.avatar} - {product.name}
                </h3>
            </div>
        );
    }
}

export default ProductItem;
