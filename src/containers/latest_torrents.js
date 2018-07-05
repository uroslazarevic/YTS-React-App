import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLatestTorrents } from 'actions';
import RenderMovieCard from 'components/render_movie_card';
import _ from 'lodash';

class LatestTorrents extends Component {

  componentWillMount() {
    this.props.getLatestTorrents();
  };

  renderLatestMovies(){
    const { latestMovies } = this.props;

    return _.chunk(latestMovies, 4).map(
       (movieArray, index) => {

        const renderArray = () => {
          return movieArray.map( movie => {
            const { genres, torrents } = movie;
            const { quality } = torrents[torrents.length -1];
            console.log(quality);

            return (
              <RenderMovieCard
                key={movie.id}
                movie={movie}
                genres={genres}
                quality= {quality}
              />
            );
          });
        }

        return (
          <div key={index} className="row" style={{marginBottom: '20px' }} >
            {renderArray()}
          </div>
        );
      }
    );
  };
  
  render() {
    return (
      <div>
        <div className="latest-torrents-title">Latest YIFY Movies Torrents</div>
        <div className="row">
          {this.renderLatestMovies()}
        </div>
      </div>
    );
  };
};

function mapStateToProps({ movies }) {
  return { latestMovies: movies.latestMovies };
};

export default connect(mapStateToProps, { getLatestTorrents })(LatestTorrents);