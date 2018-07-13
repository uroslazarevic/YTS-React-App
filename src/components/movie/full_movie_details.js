import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { 
  getFullMovieDetails, 
  getMovieSuggestions
} from 'actions';
import { PageLoader } from 'components/loader';

import MainMovieDetails from 'components/main_movie_info';
import SimilarMovies from 'components/similar_movies';
import Screenshots from 'components/screenshots';
import MovieSubinfo from 'components/movie_subinfo';
import MovieTrailerModal from 'components/movie_trailer_modal';
import TorrentsModal from 'components/torrents_modal';



class FullMovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true, 
      showTrailerModal: false,
      showTorrentsModal: false
    };

    this.torrentsModal = React.createRef();
    this.showTrailerModal = this.showTrailerModal.bind(this);
    this.closeTrailerModal = this.closeTrailerModal.bind(this);
    this.handleTorrentsModal = this.handleTorrentsModal.bind(this);
    this.hideTorrentsModal = this.hideTorrentsModal.bind(this);
  }

  showTrailerModal() {
    this.setState({ showTrailerModal: true });
  }

  closeTrailerModal() {
    this.setState({ showTrailerModal: false });
  }

  handleTorrentsModal() {
    this.setState({ showTorrentsModal: true });
  }

  hideTorrentsModal() {
    this.setState({ showTorrentsModal: false });
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
    const { id } = this.props.location.state;
    this.initialize(id);
  }  

  componentWillReceiveProps(newProps) {
    const  oldId  = this.props.location.state.id;
    const  newId  = newProps.location.state.id;
    if(newId !== oldId) {
      this.initialize(newId);
    }
  }

  render() {
    const state = this.state.loading;
    const { movieDetails, movieSuggestions } = this.props.movie;

    return (
      <div className="bg-full-movie-details">
        {this.state.showTrailerModal ? <MovieTrailerModal 
          closeTrailerModal={this.closeTrailerModal}
          trailer={ movieDetails.yt_trailer_code }/> : null }

         { this.state.showTorrentsModal ? <TorrentsModal 
            hideTorrentsModal={this.hideTorrentsModal}
         torrents={movieDetails.torrents}/> : null }
        
        <PageLoader state={state}/>
        <div className="content-wrapper">
          <div className="row">
            <div className="navbar-position-div"></div>
            <div className="col-md-8">
              <MainMovieDetails 
                info={movieDetails} 
                handleTorrentsModal = { this.handleTorrentsModal } />
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
  return { movie };
}

export default connect(mapStateToProps, { 
  getFullMovieDetails,
  getMovieSuggestions
 } )(FullMovieDetails)