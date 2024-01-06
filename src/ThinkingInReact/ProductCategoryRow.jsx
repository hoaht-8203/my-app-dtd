import React, { Component } from 'react';

class ProductCategoryRow extends Component {
    render() {
        const { category } = this.props;
        return (
            <tr>
                <td colSpan={2}>{category}</td>
            </tr>
        );
    }
}

export default ProductCategoryRow;
