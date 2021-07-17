import React, { Component } from "react";
import Container from "./components/Container";
import imagesApi from './services/image-finder-api';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Loader from './components/Loader';
import Modal from './components/Modal';

class App extends Component {
  state = {
    images: [],
    largeImage: {
      src: "",
      alt: "",
    },
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }

    if (this.state.images.length > 12) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  onChangeQuery = (query) => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      images: [],
      error: null,
    });
  };

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

  
      imagesApi(options)
      .then((images) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          currentPage: prevState.currentPage + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };


  onImageClick = (e) => {
    if (e.target !== e.currentTarget) {
      const currentImage = this.state.images.find(
        (image) => image.webformatURL === e.target.src
      );

      const src = currentImage.largeImageURL;
      const alt = currentImage.tags;

      this.setState({ largeImage: { src, alt } });
    }
  };

  onModalClose = () => {
    this.setState({
      largeImage: {
        src: "",
        alt: "",
      },
    });
  };


  render() {
    const { isLoading, images, largeImage, error } = this.state;
    const shouldRenderLoadMoreButton = images.length > 0 && !isLoading;

     return (
         <Container>
            {error && <Loader />}
            
            <Searchbar onSubmit={this.onChangeQuery} />

            {error && (
              <h1>
                An error occurred while loading the image
              </h1>
            )}

            <ImageGallery images={images} onImageClick={this.onImageClick} />

             {shouldRenderLoadMoreButton && <Button onClick={this.fetchImages} />}

             {largeImage.src && (
                <Modal
                  src={largeImage.src}
                  alt={largeImage.alt}
                  onClose={this.onModalClose}
                />
              )}
         </Container>
     );
 }
}
export default App;
