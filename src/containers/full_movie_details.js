import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { 
  getFullMovieDetails, 
  getMovieSuggestions
} from 'actions';

import { 
  MainMovieDetails,
  SimilarMovies,
  Screenshots,
  MovieSubinfo,
  MovieTrailerModal, 
  TorrentsModal,
  PageLoader,
  ImageSwiper
} from 'components';

class FullMovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true, 
      showTrailerModal: false,
      showTorrentsModal: false,
      showImageCarousel: false
    };

    this.torrentsModal = React.createRef();
    this.showTrailerModal = this.showTrailerModal.bind(this);
    this.closeTrailerModal = this.closeTrailerModal.bind(this);
    this.handleTorrentsModal = this.handleTorrentsModal.bind(this);
    this.hideTorrentsModal = this.hideTorrentsModal.bind(this);
    this.showImageCarousel = this.showImageCarousel.bind(this);
    this.closeImageCarousel = this.closeImageCarousel.bind(this);
  }

  showImageCarousel() {
    this.setState({ showImageCarousel: true })
  }

  closeImageCarousel() {
    this.setState({ showImageCarousel: false })
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
    console.log('Old id:',oldId,'New id:', newId)
    if(newId !== oldId) {
      this.initialize(newId);
    }
  }

  render() {
    const { movieDetails, movieSuggestions } = this.props.movie;

    return (
      <div className="bg-full-movie-details">
        {this.state.showTrailerModal ? <MovieTrailerModal 
          closeTrailerModal={this.closeTrailerModal}
          trailer={ movieDetails.yt_trailer_code }/> : null }

         { this.state.showTorrentsModal ? <TorrentsModal 
            hideTorrentsModal={this.hideTorrentsModal}
            torrents={movieDetails.torrents}/> : null }

        {this.state.showImageCarousel && <ImageSwiper 
          closeImageCarousel={this.closeImageCarousel} 
          info={movieDetails} />}

        
        { this.state.loading ? <PageLoader/> : null}
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
              showImageCarousel={this.showImageCarousel}
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