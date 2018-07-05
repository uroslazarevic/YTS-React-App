import React from 'react';

import YTSDescription from 'components/yts_description';
import PopularDownloads from 'containers/popular_downloads';
import LatestTorrents from 'containers/latest_torrents';

export default function() {
  return (
      <div>
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