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
    setTimeout(() => {
        resolve(initProductList);
    }, 1000);
});

class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: [],
            searchText: '',
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

    handleChange = (name) => (event) => {
        if (name === 'searchText') {
            this.setState({
                searchText: event.target.value,
            });
        } else if (name === 'inStock') {
            this.setState({
                isOnlyShowStock: event.target.checked,
            });
        }
    };

    render() {
        const { productList, searchText, isOnlyShowStock } = this.state;
        return (
            <div className="product-list">
                <SearchBar
                    handleChange={this.handleChange}
                    searchText={searchText}
                    inStock={isOnlyShowStock}
                />
                <ProductTable
                    productList={productList}
                    searchText={searchText}
                    onlyShowStock={isOnlyShowStock}
                />
            </div>
        );
    }
}

export default FilterableProductTable;
