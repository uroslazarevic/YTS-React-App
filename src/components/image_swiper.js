import React, { Component } from 'react';
import querystring from 'querystring';
import ReactSwipe from 'react-swipe';

const query = querystring.parse(window.location.search.slice(1));

export default class screenshotSwiper extends Component {
  constructor(props) {
    super(props);

    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.closeSwiper = this.closeSwiper.bind(this);
  }

  closeSwiper(event) {
    const { closeImageCarousel } = this.props;
    const { target } = event;
    if(target.className === "swiper-bg" || target.className === "fas fa-times") {
      closeImageCarousel();
    }
  }

  generateSlidePanes() {
    // generate slide panes
    let imageArray = [];
    const { info } = this.props;
    const image1 = info.large_screenshot_image1;
    const image2 = info.large_screenshot_image2;
    const image3 = info.large_screenshot_image3;
    imageArray.push.apply(imageArray,  [image1, image2, image3]);

    return imageArray.map((image, i) => {
      return (
        <div key={i}>
          <div className="item"><img className="swiper-img" src={image} alt="" /></div>
        </div>
      );
    });
  }

  swiperOptions() {
    // change Swipe.js options by query params
    const startSlide = parseInt(query.startSlide, 10) || 0;
    return {
      startSlide: startSlide < this.generateSlidePanes().length && startSlide >= 0 ? startSlide : 0,
      auto: parseInt(query.auto, 10) || 0,
      speed: parseInt(query.speed, 10) || 300,
      disableScroll: query.disableScroll === 'true',
      continuous: query.continuous === 'true'
    };
  }
  
  next() {
    this.reactSwipe.next();
  }

  prev() {
    this.reactSwipe.prev();
  }

  render() {
    return (
      <div onClick={this.closeSwiper}  className="swiper-bg">
        <div className="center">
          <ReactSwipe ref={reactSwipe => this.reactSwipe = reactSwipe} className="mySwipe" swipeOptions={this.swipeOptions}>
              {this.generateSlidePanes()}
          </ReactSwipe>
          < div className="swiper-controls">
            <span onClick={this.prev}><i className="fas fa-angle-left"></i></span>
            <span onClick={this.next}><i className="fas fa-angle-right"></i></span>
            <span ><i className="fas fa-times"></i></span>
          </div>
        </div>
      </div>
    );
  }
}
