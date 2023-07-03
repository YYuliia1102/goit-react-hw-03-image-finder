import React from "react";
import PropTypes from "prop-types";

const LoadMoreBtn = ({ isHidden, onClick }) => {
    if (isHidden) {
        return null;
    }

    return (
        <div className="buttonContainer">
            <button className="Button" type="button" onClick={onClick}>
                Load more
            </button>
        </div>
    );
};

LoadMoreBtn.propTypes = {
    isHidden: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
};

export default LoadMoreBtn;
