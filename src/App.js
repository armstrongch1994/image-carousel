import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const data = [
  'https://i.imgur.com/Doky7uO.jpg',
  'https://i.imgur.com/G5sNVSe.jpg',
  'https://i.imgur.com/ew0T193.jpg',
  'https://i.imgur.com/7geGbQQ.jpg',
];

class ImageCarousel extends Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
      photos: data,
    };
    this.nextImage = this.nextImage.bind(this);
    this.previousImage = this.previousImage.bind(this);
  }
  nextImage() {
    let dataLength = this.state.photos.length - 1;
    let index = this.state.currentIndex;
    if (index === dataLength) {
      this.setState({
        currentIndex: 0,
      });
    } else {
      index++;
      this.setState({
        currentIndex: index,
      });
    }
  }
  previousImage() {
    let index = this.state.currentIndex;
    let dataLength = this.state.photos.length - 1;
    if (index === 0) {
      this.setState({
        currentIndex: dataLength,
      });
    } else {
      index--;
      this.setState({
        currentIndex: index,
      });
    }
  }
  render() {
    return (
      <div>
        <h1 className="title"> Image Carousel</h1>
        <div className="image-carousel">
          <div className="arrow-wrapper">
            <div className="left controller" onClick={this.previousImage}>
              <i className="fa fa-chevron-left" />
            </div>
            <div className="carousel">
              <img
                src={this.state.photos[this.state.currentIndex]}
                alt="dog-photo"
              />
            </div>
            <div className="right controller" onClick={this.nextImage}>
              <i className="fa fa-chevron-right" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ImageCarousel;
