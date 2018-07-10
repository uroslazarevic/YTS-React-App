import React from 'react';

export default function({trailer}) {
  return (
    <div onClick={closeTrailerModal} className="trailer-bg">
      <div className="trailer">
        <iframe
          title={trailer} 
          src={`https://www.youtube.com/embed/${trailer}`}
          frameBorder="0"
        >Browser not compatible.</iframe>
        <div className="close-trailer">&times;</div>
      </div>
    </div>
  );
}

function closeTrailerModal(e) {
  const target = e.target;
  const trailerModal = document.querySelector('.trailer-bg');

  if(target.classList.contains('close-trailer') || target.classList.contains('trailer-bg')) {
    trailerModal.style.opacity= '0'
    trailerModal.style.visibility ='hidden';
  }
}