import React from 'react';
import noImg from 'images/image.png';

export default function({ info }) {
  const { description_full, cast } = info;
  return (
    <div className="subinfo">
      <div className="col-md-8">
        <div className="synopsis">
          <div className="synopsis-title">Synopsis</div>
          <div className="synopsis-body">{description_full}</div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="casts">
          <div className="cast-title">Cast</div>
          {createCast(cast)}
        </div>
      </div>
    </div>
  );
}

function createCast(cast) {
  return cast? (cast.map( actor => {
    const { 
      imdb_code,
      url_small_image,
      name,
      character_name
    } = actor
    
    return (
      <div key={imdb_code} className="cast">
        {createCastImg(url_small_image)}
        <div className="cast-info"><span>{name}</span> as {character_name}</div>
      </div>
    )
  }))
  : (<div className="no-cast-info" >Cast information not available...</div>)
}

function createCastImg(url) {
 return url ? <img className="cast-img" src={url} alt="" /> 
 : <img className="cast-img" src={noImg} alt="" />
}