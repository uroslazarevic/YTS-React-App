import React from 'react';
import screenImg from '../images/monitor.png';

export default function ({torrents, hideTorrentsModal}) {
  return(
    <div onClick={(event) => hideModalHelper( event, hideTorrentsModal)} className="torrents-modal-bg">
      <div className="torrents-modal">
        <div className="close-torrents-modal">&times;</div>
        <div className="torrents-modal-title">Select movie quality</div>
        <div className="torrents-modal-content">{qualityTorrent(torrents)}</div>
      </div>
    </div>
  )
}

function hideModalHelper(event, hideTorrentsModal) {
  const { target } = event;
  if(target.className === 'torrents-modal-bg' || target.className === 'close-torrents-modal' ) {
    hideTorrentsModal();
  }
}

function qualityTorrent(torrents) {
  return torrents ? (torrents.map(torrent => {
    return (
      <div key={torrent.url} className="torrent-quality">
        <div className="quality-img">
          <img src={screenImg} alt="" />
          <div className="quality-text">{torrent.quality}</div>
        </div>
        <div className="file-text">File size</div>
        <div className="file-size">{torrent.size}</div>
        <div className="show-torrents-btn">
          <a href={torrent.url}>
            <span><i className="fas fa-download"></i></span> Download
          </a>
        </div>
      </div>
    );
  })) : null
}