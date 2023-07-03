import React, { Component } from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import { getImages } from "services/getImages";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";

class ImageGallery extends Component {
    state = {
        showModal: false,
        images: [],
        isLoading: false,
        searchText: "",
        page: 1,
        error: null,
    };

    openModal = (image) => {
        this.setState({ showModal: true, selectedImage: image });
    };

    closeModal = () => {
        this.setState({ showModal: false, selectedImage: null });
    };


    handleSearch = (searchText) => {
        this.setState({ searchText, images: [], page: 1 }, () => {
            this.fetchImages();
        });
    };

    componentDidUpdate(prevProps) {
        if (prevProps.searchText !== this.props.searchText) {
            this.handleSearch(this.props.searchText);
        }
    }

    fetchImages = async () => {
        const { searchText, page } = this.state;
        this.setState({ isLoading: true, error: null });

        try {
            const images = await getImages(searchText, page);
            this.setState((prevState) => ({
                images: page === 1 ? images : [...prevState.images, ...images],
                page: page + 1,
            }));
        } catch (error) {
            this.setState({ error: error.message });
        } finally {
            this.setState({ isLoading: false });
        }
    };

    handleLoadMore = () => {
        this.fetchImages();
    };

    render() {
        const { images, isLoading, error } = this.state;

        return (
            <>
                {isLoading && <Loader />}
                {error && <h1>Error: {error}</h1>}
                <ul className="ImageGallery">
                    {images.map((image) => (
                        <ImageGalleryItem
                            key={image.id}
                            src={image.webformatURL}
                            alt={image.title}
                        />
                    ))}
                </ul>
                {images.length > 0 && !isLoading && (
                    <Button onClick={this.handleLoadMore} />
                )}
            </>
        );
    }
}

ImageGallery.propTypes = {
    searchText: PropTypes.string.isRequired,
};

export default ImageGallery;
