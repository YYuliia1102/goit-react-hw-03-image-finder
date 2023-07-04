import React, { Component } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";
import { getImages } from "../services/getImages.js"; // Припустимо, що ваш файл з функцією getImages називається api.js
import Button from "./Button/Button";
import Loader from "./Loader/Loader";

class App extends Component {
  state = {
    images: [],
    page: 1,
    query: "",
    isLoading: false,
    loadMore: true,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.page !== prevState.page || this.state.query !== prevState.query) {
      this.fetchImages();
    }
  }

  handleSearch = (searchText) => {
    this.setState({ query: searchText, page: 1, images: [] });
  };

  fetchImages = async () => {
    const { query, page } = this.state;
    this.setState({ isLoading: true, error: null });

    try {
      const { images, totalHits } = await getImages(query, page);
      const loadMore = page < Math.ceil(totalHits / 12);

      this.setState((prevState) => ({
        images: [...prevState.images, ...images],
        loadMore,
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };


  handleLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, isLoading, loadMore, error } = this.state;

    return (
      <div>
        {error && <h1>Error: {error}</h1>}
        <Searchbar handleSearch={this.handleSearch} />
        <ImageGallery images={images} />
        {isLoading && <Loader />}
        {loadMore && <Button onClick={this.handleLoadMore} />}
      </div>
    );
  }
}

export default App;
