import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFullMovieDetails, getMovieSuggestions } from 'actions';

import { Link } from 'react-router-dom';

class SimilarMovies extends Component {


  renderSimilarMovie(similar) {
    return similar.map(movie => {
      return (
        <div key={movie.title} className="similar-movie-card">
          <Link to={`/movie/${movie.id}`}>
            <img src={movie.medium_cover_image} alt="" />
          </Link>
        </div>
      );
    })
  }

  render() {
    const { similar } = this.props;
    return (
      <div className="similar_movies">
        <div className="similar-movies-title">Similar Movies</div>
        {this.renderSimilarMovie(similar)}
      </div>
    );
  }
}

function mapStateToProps({ movie }) {
  return {
    movie
  };
}

export default connect(mapStateToProps, { 
  getFullMovieDetails,
  getMovieSuggestions
 } )(SimilarMovies)

