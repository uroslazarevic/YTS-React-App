import React from 'react';
import RenderMovieCard from 'components/render_movie_card';
import _ from 'lodash';

export default function(props) {
  const { latestMovies } = props;
  return (
    <div>
      <div className="latest-torrents-title">Latest YIFY Movies Torrents</div>
      <div className="row">
        {renderLatestMovies(latestMovies)}
      </div>
    </div>
  );
};

function renderLatestMovies(latestMovies){
  return _.chunk(latestMovies, 4).map(
     (movieArray, index) => {

      const renderArray = () => {
        return movieArray.map( movie => {
          const { genres, torrents } = movie;
          const { quality } = torrents[torrents.length -1];

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
}
