import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ images, openModal }) => {
    return (
        <ul className="ImageGallery">
            {images.map((image) => (
                <ImageGalleryItem
                    key={image.id}
                    src={image.webformatURL}
                    alt={image.title}
                    openModal={openModal} // Передача пропсу openModal до компонента ImageGalleryItem
                />
            ))}
        </ul>
    );
};

ImageGallery.propTypes = {
    images: PropTypes.array.isRequired,
    openModal: PropTypes.func.isRequired,
};

export default ImageGallery;
