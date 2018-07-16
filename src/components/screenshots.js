import React from 'react';
import playBtn from '../images/play-btn.png';

export default function (props) {
  
  const { showTrailerModal, showImageCarousel, info } = props;
  const image1 = info.medium_screenshot_image1;
  const image2 = info.medium_screenshot_image2;
  const image3 = info.medium_screenshot_image3;
    
  return (
    <div className="screenshots">
      <div className="screenshot"
        onClick={showTrailerModal}>
        <img src={image1} alt="" />
        <div className="play-trailer">
          <img src={playBtn} alt="" />
          <div className="play-trailer-text">Trailer</div>
        </div>
      </div>
      <div onClick={() => showSwiper(showImageCarousel)}  className="screenshot">
        <img src={image2} alt="" />
      </div>
      <div onClick={() => showSwiper(showImageCarousel)} className="screenshot">
        <img src={image3} alt="" />
      </div>
    </div>
  );
}

function showSwiper(showImageCarousel) {
  showImageCarousel()
}