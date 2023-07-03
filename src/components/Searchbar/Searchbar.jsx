import React, { Component } from "react";

class Searchbar extends Component {
    state = {
        value: '',
        error: null,
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { value } = this.state;
        if (value.trim() !== "") {
            this.props.handleSearch(value);
            this.setState({ value: "" });
        }
    };

    render() {
        const { value } = this.state;
        return (
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={this.handleSubmit}>
                    <button type="submit" className="SearchForm-button">
                        <span className="button-label">Search</span>
                    </button>
                    <input
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={value}
                        onChange={this.handleChange}
                    />
                </form>
            </header>
        );
    }
}

export default Searchbar;
