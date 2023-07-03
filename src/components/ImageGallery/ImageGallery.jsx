import React, { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

class ImageGallery extends Component {
    render() {
        const { images } = this.props;

        return (
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
    }
}

export default ImageGallery;
