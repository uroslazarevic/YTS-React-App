import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { 
  getFullMovieDetails, 
  getMovieSuggestions
} from 'actions';
import Loading from 'components/loader';

import MainMovieDetails from 'components/main_movie_info';
import SimilarMovies from 'components/similar_movies';
import Screenshots from 'components/screenshots';
import MovieSubinfo from 'components/movie_subinfo';
import MovieTrailerModal from 'components/movie_trailer_modal';


class FullMovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true, 
      showModal: true
    };

    this.showTrailerModal = this.showTrailerModal.bind(this);
    this.closeTrailerModal = this.closeTrailerModal.bind(this);
  }

  showTrailerModal() {
    let trailerPosition = window.screen.availHeight/2;
    trailerPosition += window.pageYOffset - 430;
    const trailerContainer = document.querySelector('.trailer-container');
    const trailerModal = document.querySelector('.trailer');
    const trailerVideo = document.querySelector('iframe');
    const trailerBtn = document.querySelector('.close-trailer');
   
    this.setState({ showModal: true }, () => {
      trailerModal.style.top = `${trailerPosition}px`;
      trailerContainer.classList.add('visible');
      trailerVideo.classList.add('spread-video-player');
      trailerBtn.classList.add('animate-btn');
    });
  }

  closeTrailerModal(e) {
    this.setState({ showModal: false });
    const target = e.target;
    const trailerContainer = document.querySelector('.trailer-container');
    const trailerVideo = document.querySelector('iframe');
    const trailerBtn = document.querySelector('.close-trailer');
  
    if(target.classList.contains('close-trailer') || target.classList.contains('shading-bg')) {
      trailerContainer.classList.remove('visible');
      trailerVideo.classList.remove('spread-video-player');
      trailerBtn.classList.remove('animate-btn');
    }
  }

  initialize(id) {
    const { getFullMovieDetails, getMovieSuggestions } = this.props;
    this.setState({ loading: true});
    axios.all([
      getFullMovieDetails({ movie_id: id }),
      getMovieSuggestions({ movie_id: id })
    ]).then(() => {
      this.setState({ loading: false })
    });
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
        <MovieTrailerModal
          closeTrailerModal={this.closeTrailerModal}
          trailer={ movieDetails.yt_trailer_code }
        />
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
          <div className="row">
            <Screenshots 
              showTrailerModal={this.showTrailerModal}
              info={movieDetails} 
            />
            <MovieSubinfo info={movieDetails} />
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
 } )(FullMovieDetails)