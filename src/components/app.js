import React,{ Component } from 'react';

import NavBar from '../components/navbar';
import YTSDescription from '../components/yts_description';
import PopularDownloads from '../containers/popular_downloads';
import LatestTorrents from '../containers/latest_torrents';

export default class App extends Component {
 render() {
   return (
     <div>
        <NavBar />
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
   )
 }
};