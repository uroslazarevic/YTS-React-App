import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLatestTorrents, getPopularDownloads } from 'actions';
import axios from 'axios';

import YTSDescription from 'components/yts_description';
import PopularDownloads from 'components/popular_downloads';
import LatestTorrents from 'components/latest_torrents';
import { PageLoader } from 'components/loader';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { pageLoader: false };
  }

  initialize() {
    this.setState({ pageLoader: true });
    const {getPopularDownloads, getLatestTorrents} = this.props;
    axios.all([
      getPopularDownloads(),
      getLatestTorrents()
    ]).then(() => {
      this.setState({ pageLoader: false })
    });
  }

  componentWillMount() {
    this.initialize();
  }

  render() {
    const { popularDownloads, latestMovies } = this.props;

    return (
        <div>
          {this.state.pageLoader ? <PageLoader /> : null }
          <div className="home-content">
            <div className="content-wrapper">
                <YTSDescription />
                <PopularDownloads popularDownloads={ popularDownloads } />
            </div>
          </div>
          <div className="latest-torrents">
            <div className=" content-wrapper">
                <LatestTorrents latestMovies={ latestMovies } />
            </div>
          </div>
        </div>
    );
  };
}

function mapStateToProps({ movies }) {
  return { 
    latestMovies: movies.latestMovies,
    popularDownloads: movies.popularDownloads
  };
};

export default connect(mapStateToProps, { getLatestTorrents, getPopularDownloads })(Home);
