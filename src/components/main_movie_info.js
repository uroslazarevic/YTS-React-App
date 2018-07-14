import React from 'react';
import imdbLogo from '../images/IMDB_Logo_2016.png';
import camCorder from '../images/camCorder.png';

export default function({ info, handleTorrentsModal }) {
  const { genres, torrents, imdb_code } = info;
  
  return (
    <div className="main-movie-info">
      <div className="movie-poster">
        <div>
          <img src={info.medium_cover_image} alt="" />
        </div>
        <div 
          onClick={() => handleTorrentsModal()}
          className="show-torrents-btn">
          <a href="javascript:void(0)">
            <span><i className="fas fa-download"></i></span> Download
          </a>
        </div>
      </div>
      <div className="movie-info">
        <div className="title">{info.title}</div>
        <div className="year">{info.year}</div>
        <div className="genres">{renderMovieGenre(genres)}</div>
        <div className="torrents"><em>Available in:</em>{renderMovieTorrents(torrents)}</div>
        <div className="ratings">
          <div className="rating-row"><span><i className="far fa-heart"></i></span>{info.like_count}</div>
          <div className="rating-row"><span><img src={camCorder} alt=""/></span>{info.runtime}min</div>
          <div className="rating-row"><a href={`https://www.imdb.com/title/${imdb_code}`}><span><img src={imdbLogo} alt=""/></span></a>{info.rating}<span><i className="fas fa-star"></i></span></div>
        </div>
      </div>
    </div>
  );
}

function renderMovieGenre(genres) {
  return genres ? (
    genres.join(" / ")
  ) : false;
};

function renderMovieTorrents(torrents) {
  if(torrents) {
    return torrents.map(torrent => {
      return (
        <a key={torrent.url} className="torrent-block" href={torrent.url}>{torrent.quality}</a>
      );
    });
  }
};
