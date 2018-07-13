import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFullMovieDetails, getMovieSuggestions } from 'actions';

import { Link } from 'react-router-dom';

class SimilarMovies extends Component {


  renderSimilarMovie(similar) {
    return similar.map(movie => {
      const title = movie.url.split('https://yts.am/movie/').slice(1, 2);

      return (
        <div key={title} className="similar-movie-card">
          <Link to={{ pathname:`/movie/${title}`, state: { id: movie.id } }}>
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

