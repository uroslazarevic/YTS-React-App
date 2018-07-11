import React, { Component } from 'react';

import YTSDescription from 'components/yts_description';
import PopularDownloads from 'containers/popular_downloads';
import LatestTorrents from 'containers/latest_torrents';
import { PageLoader } from 'components/loader';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { pageLoader: false };
  }

  componentWillMount() {
    this.setState({ pageLoader: true });
  }

  componentDidMount() {
    this.setState({ pageLoader: false });
  }
  
  render() {

    return (
        <div>
          {this.state.pageLoader ? <PageLoader state={this.state.pageLoader} /> : null }
          <div className="home-content">
            <div className="content-wrapper">
                <YTSDescription />
                <PopularDownloads />
            </div>
          </div>
          <div className="latest-torrents">
            <div className=" content-wrapper">
                <LatestTorrents />
            </div>
          </div>
        </div>
    );
  };
}

export default Home;