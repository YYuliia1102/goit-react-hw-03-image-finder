import React, { Component } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";


class App extends Component {
  state = {
    searchText: "",
  };

  handleSearch = (searchText) => {
    this.setState({ searchText });
  };

  render() {
    const { searchText } = this.state;

    return (
      <div>
        <Searchbar handleSearch={this.handleSearch} />
        <ImageGallery searchText={searchText} />
      </div>
    );
  }
}


export default App;
