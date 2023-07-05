import React from "react";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ src, alt, openModal }) => {
    const handleClick = () => {
        openModal(src);
    };

    return (
        <li className="ImageGalleryItem" onClick={handleClick}>
            <img className="ImageGalleryItem-image" src={src} alt={alt} />
        </li>
    );
};

ImageGalleryItem.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
