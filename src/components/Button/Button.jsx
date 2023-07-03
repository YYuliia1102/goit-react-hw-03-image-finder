import React, { Component } from "react";

class LoadMoreBtn extends Component {
    state = {
        hidden: this.props.isHidden,
        disabled: false,
        buttonText: "Load more",
    };

    hide = () => {
        this.setState({ hidden: true });
    };

    show = () => {
        this.setState({ hidden: false });
    };

    disable = () => {
        this.setState({ disabled: true, buttonText: "Loading..." });
    };

    enable = () => {
        this.setState({ disabled: false, buttonText: "Load more" });
    };

    end = () => {
        this.setState({ disabled: true, buttonText: "We are sorry, but you have reached the end of search results" });
    };

    render() {
        const { hidden, disabled, buttonText } = this.state;

        if (hidden) {
            return null;
        }

        return (
            <button type="button" disabled={disabled} onClick={this.props.onClick}>
                {buttonText}
            </button>
        );
    }
}

export default LoadMoreBtn;
