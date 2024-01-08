import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        const { searchText, inStock, handleChange } = this.props;
        return (
            <div className="search-bar">
                <div>
                    <input
                        placeholder="Search..."
                        type="text"
                        value={searchText}
                        onChange={handleChange('searchText')}
                    />
                </div>
                <div>
                    <input
                        type="checkbox"
                        name="onlyStockProduct"
                        checked={inStock}
                        onChange={handleChange('inStock')}
                    />
                    <label htmlFor="onlyStockProduct">Only show products in stock</label>
                </div>
            </div>
        );
    }
}

export default SearchBar;
