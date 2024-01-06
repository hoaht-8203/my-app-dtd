import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import './FilterableProductTable.css';

const initProductList = [
    { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
    { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
    { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
    { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
    { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
    { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
];

const fetchApi = new Promise((resolve) => {
    resolve(initProductList);
});

class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: [],
            productName: '',
            isOnlyShowStock: false,
        };
    }

    componentDidMount() {
        fetchApi
            .then((result) => {
                this.setState({
                    productList: result,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    onChangeSearchText = (value) => {
        this.setState({
            productName: value,
        });
    };

    onChangeCheckBox = (value) => {
        this.setState({
            isOnlyShowStock: value,
        });
    };

    render() {
        const { productList, productName, isOnlyShowStock } = this.state;
        return (
            <div className="product-list">
                <SearchBar
                    onChangeSearchText={this.onChangeSearchText}
                    onChangeCheckBox={this.onChangeCheckBox}
                />
                <ProductTable
                    productName={productName}
                    productList={productList}
                    searchText={productName}
                    onlyShowStock={isOnlyShowStock}
                />
            </div>
        );
    }
}

export default FilterableProductTable;
