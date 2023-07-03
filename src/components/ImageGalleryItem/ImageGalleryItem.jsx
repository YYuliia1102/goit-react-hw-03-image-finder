import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "../Modal/Modal";

const ImageGalleryItem = ({ src, alt }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <li className="ImageGalleryItem" onClick={openModal}>
                <img className="ImageGalleryItem-image" src={src} alt={alt} />
            </li>
            {isOpen && (
                <Modal imageUrl={src} alt={alt} onClose={closeModal} />
            )}
        </>
    );
};

ImageGalleryItem.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
};

export default ImageGalleryItem;
