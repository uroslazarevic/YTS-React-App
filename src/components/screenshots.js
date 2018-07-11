import React from 'react';
import playBtn from '../images/play-btn.png';

export default function({ info, showTrailerModal }) {
  const {
    medium_screenshot_image1,
    medium_screenshot_image2,
    medium_screenshot_image3
  } = info;

  return (
    <div className="screenshots">
      <div className="screenshot"
        onClick={showTrailerModal}
      >
        <img src={medium_screenshot_image1} alt="" />
        <div className="play-trailer">
          <img src={playBtn} alt="" />
          <div className="play-trailer-text">Trailer</div>
        </div>
      </div>
      <div className="screenshot">
        <img src={medium_screenshot_image2} alt="" />
      </div>
      <div className="screenshot">
        <img src={medium_screenshot_image3} alt="" />
      </div>
    </div>
  );
}