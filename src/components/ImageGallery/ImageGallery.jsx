import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ images }) => (
    <ul className="ImageGallery">
        {images.map((image) => (
            <ImageGalleryItem
                key={image.id}
                src={image.webformatURL}
                alt={image.title}
            />
        ))}
    </ul>
);

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            title: PropTypes.string,
        })
    ).isRequired,
};

export default ImageGallery;
