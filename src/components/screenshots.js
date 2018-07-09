import React from 'react';

export default function({ info }) {
  const {
    yt_trailer_code,
    medium_screenshot_image1,
    medium_screenshot_image2,
  } = info;
  console.log(info)

  return (
    <div className="screenshots">
      <div className="screenshot">
        <iframe 
          src={`https://www.youtube.com/embed/${yt_trailer_code}`}
          frameBorder="0"
        >Browser not compatible.</iframe>
      </div>
      <div className="screenshot">
        <img src={medium_screenshot_image1} alt="" />
      </div>
      <div className="screenshot">
        <img src={medium_screenshot_image2} alt="" />
      </div>
    </div>
  );
}



