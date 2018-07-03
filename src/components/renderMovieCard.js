import React, { Component } from 'react';
import noImage from '../images/no_image_available.jpeg';

export default class RenderMovieCard extends Component{

  renderMovieGenre(genres) {
    return genres ? (
      genres.slice(0, 2).map( genre => {
        return <div key={genre} className="hidden-details-style">{genre}</div>
      })
    ) : false;
  }

  renderMovieImg(movie) {
    const img = movie.large_cover_image;
    return img ? img : noImage;
  }
  

  render() {
    const {movie, genres} = this.props;

    return (
      <div key={movie.title} className="col-md-3">
        <div className="detail-movie">
          <div className="detail-img">
            <img src={this.renderMovieImg(movie)} alt='' />
            <div className="hidden-details">
              <div><i className="fas fa-star"></i></div>
              <div className="hidden-details-rating">{movie.rating} / 10</div>
              <div className="hidden-details-genre">{this.renderMovieGenre(genres)}</div>
              <div className="hidden-details-btn">View Details</div>
            </div>
          </div>
          <div className="detail-title">{movie.title}</div>
          <div className="detail-movieYear">{movie.year}</div>
        </div>
      </div> 
    );
  }
}