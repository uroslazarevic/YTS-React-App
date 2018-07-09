import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { 
  getFullMovieDetails, 
  getMovieSuggestions
  // getMovieComments,
  // getMovieReviews,
  // getMovieParentalGuides 
} from 'actions';
import Loading from 'components/loader';

import MainMovieDetails from 'components/main_movie_info';
import SimilarMovies from 'components/similar_movies';


class FullMovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {loading: true};
  }

  initialize(id) {
    const { getFullMovieDetails, getMovieSuggestions } = this.props;
    this.setState({ loading: true});
    axios.all([
      getFullMovieDetails({ movie_id: id }),
      getMovieSuggestions({ movie_id: id })
    ]).then(() => {
      this.setState({ loading: false })
    })
  }

  componentWillMount() {
    const { id } = this.props.match.params;
    this.initialize(id);
  
  }  

  componentWillReceiveProps(newProps) {
    const  oldId  = this.props.match.params.id;
    const  newId  = newProps.match.params.id
    if(newId !== oldId) {
      this.initialize(newId);
    }
  }

  render() {
    const state = this.state.loading;
    const { movieDetails, movieSuggestions } = this.props.movie;
    return (
      <div className="bg-full-movie-details">
        <Loading state={state}/>
        <div className="content-wrapper">
          <div className="row">
            <div className="navbar-position-div"></div>
            <div className="col-md-8">
              <MainMovieDetails info={movieDetails} />
            </div>
            <div className="col-md-4">
              <SimilarMovies similar={movieSuggestions} />
            </div>
          </div>
        </div>
      </div>
    );
  };
}

function mapStateToProps({ movie }) {
  return {
    movie
  };
}

export default connect(mapStateToProps, { 
  getFullMovieDetails,
  getMovieSuggestions
  // getMovieComments,
  // getMovieReviews,
  // getMovieParentalGuides
 } )(FullMovieDetails)