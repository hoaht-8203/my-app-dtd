import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends Component {
    render() {
        const { productList, searchText, onlyShowStock } = this.props;
        let lastCategory = null;
        let list = [];
        productList.forEach((product) => {
            if (onlyShowStock && !product.stocked) {
                return;
            }

            if (!product.name.toLowerCase().trim().includes(searchText.toLowerCase().trim())) {
                return;
            }

            if (lastCategory !== product.category) {
                list.push(
                    <ProductCategoryRow key={product.category} category={product.category} />,
                );
            }

            list.push(<ProductRow key={product.name} product={product} />);
            lastCategory = product.category;
        });
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{list}</tbody>
            </table>
        );
    }
}

export default ProductTable;
