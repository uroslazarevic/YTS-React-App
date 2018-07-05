import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPopularDownloads } from 'actions';
import RenderMovieCard from 'components/render_movie_card';

class PopularDownloads extends Component {
  componentWillMount() {
    this.props.getPopularDownloads();
  }

  renderPopularDownloads(){
    const { popularDownloads } = this.props;

    return popularDownloads.map( movie => {
      const { genres } = movie;
      return ( 
       <RenderMovieCard 
          key={movie.id}
          movie={movie} 
          genres={genres}
       />
      );
    });
  }
  
  render() {
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