import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLatestTorrents } from '../actions';
import RenderMovieCard from '../components/renderMovieCard';

class LatestTorrents extends Component {
  componentDidMount() {
    this.props.getLatestTorrents();
  }

  renderLatestMovies(){
    const { latestMovies } = this.props;
    console.log(latestMovies)

    return latestMovies.map( movie => {
      const { genres } = movie;

      return (
        <RenderMovieCard 
          movie={movie}
          genres={genres}
        />
      );
    })
  }
  
  render() {
    return (
      <div>
        <div className="latest-torrents-title">Latest YIFY Movies Torrents</div>
        <div className="row">
          {this.renderLatestMovies()}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ movies }) {
  return { latestMovies: movies.latestMovies };
};

export default connect(mapStateToProps, { getLatestTorrents })(LatestTorrents);
