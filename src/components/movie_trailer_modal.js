import React from 'react';

export default function({trailer, closeTrailerModal}) {
  return (
      <div onClick={closeTrailerModal} className="shading-bg">
        <div className="trailer">
          <iframe className="iframe"
            title={trailer} 
            src={`https://www.youtube.com/embed/${trailer}`}
            frameBorder="0"
          >Browser not compatible.</iframe>
          <div className="close-trailer">&times;</div>
        </div>
      </div>
  );
};