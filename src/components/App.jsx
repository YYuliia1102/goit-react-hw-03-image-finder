import React, { Component } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";
import { getImages } from "services/getImages";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";

class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    isOpen: false,
    selectedImage: null,
  };

  openModal = (image) => {
    this.setState({ isOpen: true, selectedImage: image });
  };

  closeModal = () => {
    this.setState({ isOpen: false, selectedImage: null });
  };

  handleSearch = async (searchText) => {
    try {
      const images = await getImages(searchText, 1);
      this.setState({
        images,
      });
    } catch (error) {
      this.setState({
        error: error.message,
      });
    }
  };

  handleLoadMore = async () => {
    const { images } = this.state;
    const searchText = "";

    try {
      this.setState({
        isLoading: true,
        error: null,
      });

      const newImages = await getImages(searchText, images.length + 1);
      this.setState((prevState) => ({
        images: [...prevState.images, ...newImages],
        isLoading: false,
      }));
    } catch (error) {
      this.setState({
        error: error.message,
        isLoading: false,
      });
    }
  };

  render() {
    const { images, isLoading, error, isOpen, selectedImage } = this.state;


    return (
      <div>
        {error && <h1>Error: {error}</h1>}
        <Searchbar handleSearch={this.handleSearch} />
        <ImageGallery images={images} openModal={this.openModal} />
        {isLoading && <Loader />}
        {images.length > 0 && (
          <Button onClick={this.handleLoadMore} />
        )}
        {isOpen && (
          <Modal imageUrl={selectedImage.url} alt={selectedImage.alt} onClose={this.closeModal} />
        )}
      </div>
    );
  }
}

export default App;
