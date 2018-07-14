import React from 'react';
import noImage from '../images/no_image_available.jpeg';
import { Link } from 'react-router-dom';

export default function (props) {
  const { movie, genres, quality } = props;
  const title = movie.url.split('https://yts.am/movie/').slice(1, 2);

  return (
    <div className="col-md-3 col-lg-3">
      <Link to={{ pathname:`/movie/${title}`, state: { id: movie.id } }} >
        <div className="detail-movie">
          {renderMovieQuality(quality)}
          <div className="detail-img">
            <img src={renderMovieImg(movie)} alt='' />
            <div className="hidden-details">
              <div><i className="fas fa-star"></i></div>
              <div className="hidden-details-rating">{movie.rating} / 10</div>
              <div className="hidden-details-genre">{renderMovieGenre(genres)}</div>
              <div className="hidden-details-btn">View Details</div>
            </div>
          </div>
          <div className="detail-title">{movie.title}</div>
          <div className="detail-movieYear">{movie.year}</div>
        </div>
      </Link>
    </div> 
);
};

function renderMovieQuality(quality) {
  return (
    <div className="quality-banner">
      {  quality === '1080p' ? <div className="detail-quality">{quality}</div> : <div></div>}
      {  quality === '720p' ||  quality === '3D' ? <div className="detail-quality blue">{quality}</div> : <div></div>}
    </div>
  );
};

function renderMovieGenre(genres) {
  return genres ? (
    genres.slice(0, 2).map( genre => {
      return <div key={genre} className="hidden-details-style">{genre}</div>
    })
  ) : false;
};

function renderMovieImg(movie) {
  const img = movie.large_cover_image;
  return img ? img : noImage;
};