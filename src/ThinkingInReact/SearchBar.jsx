import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            isChecked: false,
        };
    }

    handleChangeSearchText = (event) => {
        if (this.props.onChangeSearchText) {
            this.props.onChangeSearchText(event.target.value);
        }
        this.setState({
            searchText: event.target.value,
        });
    };

    handleChangeCheckBox = (event) => {
        if (this.props.onChangeCheckBox) {
            this.props.onChangeCheckBox(event.target.checked);
        }
        this.setState({
            isChecked: event.target.checked,
        });
    };

    render() {
        const { searchText, isChecked } = this.state;
        return (
            <div className="search-bar">
                <div>
                    <input
                        placeholder="Search..."
                        type="text"
                        value={searchText}
                        onChange={this.handleChangeSearchText}
                    />
                </div>
                <div>
                    <input
                        type="checkbox"
                        name="onlyStockProduct"
                        checked={isChecked}
                        onChange={this.handleChangeCheckBox}
                    />
                    <label htmlFor="onlyStockProduct">Only show products in stock</label>
                </div>
            </div>
        );
    }
}

export default SearchBar;
