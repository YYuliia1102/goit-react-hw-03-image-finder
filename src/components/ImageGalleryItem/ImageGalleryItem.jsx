import React from "react";

const ImageGalleryItem = ({ src, alt }) => {
    return (
        <li className="gallery-item">
            <img src={src} alt={alt} />
        </li>
    );
};

export default ImageGalleryItem;
