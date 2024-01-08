import React, { Component } from 'react';

class ProductCategoryRow extends Component {
    render() {
        const { category } = this.props;
        return (
            <tr>
                <td className="category" colSpan={2}>
                    {category}
                </td>
            </tr>
        );
    }
}

export default ProductCategoryRow;
