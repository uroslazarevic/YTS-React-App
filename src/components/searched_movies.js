import React from 'react';
import { Link } from 'react-router-dom';

export default function({movie}) {
  const title = movie.url.split('https://yts.am/movie/').slice(1, 2);

  return (
    <li key={movie.title}>
      <Link to={{ pathname:`/movie/${title}`, state: { id: movie.id } }}>
        <div className="searched-movie-img">
          <img src={movie.small_cover_image} alt='img' />  
        </div>
        <div className="movie-info-short">
          <div className="searched-movie-title">{movie.title}</div>
          <div className="searched-movie-year" >{movie.year}</div>
        </div> 
      </Link>
    </li>
  );
};


