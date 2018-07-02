import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPopularDownloads } from '../actions';

class PopularDownloads extends Component {
  componentDidMount() {
    this.props.getPopularDownloads();
  }

  renderMovieGenre(genres) {
   
    return genres.slice(0, 2).map( genre => {
      return <div key={genre} className="hidden-details-style">{genre}</div>
    })
  }

  renderPopularDownloads(){
    const { popularDownloads } = this.props;
    return popularDownloads.map(movie => {
      const { genres } = movie;
      return ( 
        <div key={movie.title} className="col-md-3">
          <div className="popular-dl-movie">
            <div className="popular-dl-img">
              <img src={movie.large_cover_image} alt='' />
              <div className="hidden-details">
                <div><i className="fas fa-star"></i></div>
                <div className="hidden-details-rating">{movie.rating} / 10</div>
                <div className="hidden-details-genre">{this.renderMovieGenre(genres)}</div>
                <div className="hidden-details-btn">View Details</div>
              </div>
            </div>
            <div className="popular-dl-title">{movie.title}</div>
            <div className="popular-dl-movieYear">{movie.year}</div>
          </div>
        </div> 
      );
    });
  }
  
  render() {
    console.log()
    return (
      <div>
        <h2 className="popular-movies-title">
          <span><i className="fas fa-star"></i></span> Popular Downloads
        </h2>
        <div className="row">
          {this.renderPopularDownloads()}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ movies }) {
  return { popularDownloads: movies.popularDownloads };
};

export default connect(mapStateToProps, { getPopularDownloads } )(PopularDownloads);