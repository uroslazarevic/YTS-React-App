import React from 'react';
import { RenderMovieCard } from 'components';

export default function(props) {
  const { popularDownloads } = props;

  return (
    <div>
      <h2 className="popular-movies-title">
        <span><i className="fas fa-star"></i></span> Popular Downloads
      </h2>
      <div className="row">
        { renderPopularDownloads(popularDownloads) }
      </div>
    </div>
  );
}

function renderPopularDownloads(popularDownloads){

  return popularDownloads.map( movie => {
    const { genres } = movie;
    return ( 
     <RenderMovieCard 
        key={movie.id}
        movie={movie} 
        genres={genres}
     />
    );
  });
}
