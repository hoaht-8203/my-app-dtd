import React, { Component } from 'react';

class ProductRow extends Component {
    render() {
        const { product } = this.props;
        return (
            <tr>
                <td style={{ color: product.stocked ? 'black' : 'red' }}>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        );
    }
}

export default ProductRow;
