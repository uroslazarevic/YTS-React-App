import React, { Component } from 'react';

export default class BrowseMoviesSearch extends Component {
  constructor(props) {
    super(props);
    this.qualityOptions = [
      { value: 'all', option: 'All' },
      { value: '720p', option: '720p' },
      { value: '1080p', option: '1080p' },
      { value: '3D', option: '3D' }
    ];
    this.genreOptions = [
      { value: 'all', option: 'All' },
      { value: 'action', option: 'Action' },
      { value: 'adventure', option: 'Adventure' },
      { value: 'animation', option: 'Animation' },
      { value: 'biography', option: 'Biography' },
      { value: 'comedy', option: 'Comedy' },
      { value: 'crime', option: 'Crime' },
      { value: 'documentary', option: 'Documentary' },
      { value: 'drama', option: 'Drama' },
      { value: 'family', option: 'Family' },
      { value: 'fantasy', option: 'Fantasy' },
      { value: 'film-noir', option: 'Film-Noir' },
      { value: 'game-show', option: 'Game-Show' },
      { value: 'history', option: 'History' },
      { value: 'horror', option: 'Horror' },
      { value: 'music', option: 'Music' },
      { value: 'musical', option: 'Musical' },
      { value: 'mystery', option: 'Mystery' },
      { value: 'news', option: 'News' },
      { value: 'reality-tv', option: 'Reality-TV' },
    ];
    this.ratingOptions = [
      { value: 'all', option: 'All' },
      { value: 9, option: '9+'},
      { value: 8, option: '8+'},
      { value: 7, option: '7+'},
      { value: 6, option: '6+'},
      { value: 5, option: '5+'},
      { value: 4, option: '4+'},
      { value: 3, option: '3+'},
      { value: 2, option: '2+'},
      { value: 1, option: '1+'}
    ];
    this.sortByOptions = [
      { value: '', option: 'None' },
      { value: 'rating', option: 'Rating' },
      { value: 'seeds', option: 'Seeds' },
      { value: 'peers', option: 'Peers' },
      { value: 'year', option: 'Year' },
      { value: 'like_count', option: 'Likes' },
      { value: 'alphabetical', option: 'Alphabetical' },
      { value: 'download_count', option: 'Downloads' }
    ]; 
    this.orderByOptions = [
      { value: '', option: 'None' },
      { value: 'desc', option: 'Latest' },
      { value: 'asc', option: 'Oldest' }
    ]; 
  }

  renderSelectOptions(optionsArray) {
    return optionsArray.map( element => {
      const { value, option } = element;
      return <option key={value} value={value}>{option}</option>
    })
  }

  renderSelectsArrows() {
    return (
      <div>
        <i className="fas fa-caret-up"></i>
        <i className="fas fa-caret-down"></i>
      </div>
    );
  }

  render() {
    const {
       handleSubmit,
       getParams,
       data: { query_term }
       } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className="search-movies" >
          <label className="search-term-title">Search Term</label>
          <input value={query_term} onChange={getParams} name="query_term" type="text" />
        </div>
        <button type="submit" className="search-btn">Search</button>
        <div className="search-params">

          <div className="quality-param">
          <label>Quality:</label>
            <select onChange={(event) => getParams(event)} name="quality">
             {this.renderSelectOptions(this.qualityOptions)}
            </select>
            {this.renderSelectsArrows()}
          </div>

          <div className="genre-param">
          <label>Genre:</label>
            <select onChange={(event) => getParams(event)} name="genre">
             {this.renderSelectOptions(this.genreOptions)}
            </select>
            {this.renderSelectsArrows()}
          </div>

          <div className="rating-param">
            <label>Rating:</label>
            <select onChange={getParams} name="minimum_rating">
            {this.renderSelectOptions(this.ratingOptions)}
            </select>
            {this.renderSelectsArrows()} 
          </div>

          <div className="sortBy-param">
            <label>Sort by:</label>
            <select onChange={getParams} name="sort_by">
            {this.renderSelectOptions(this.sortByOptions)}
            </select>
            {this.renderSelectsArrows()}
          </div>

          <div className="orderBy-param">
            <label>Order by:</label>
            <select onChange={getParams} name="order_by">
              {this.renderSelectOptions(this.orderByOptions)}
            </select>
            {this.renderSelectsArrows()}
          </div>

        </div>
      </form>
    );
  }
}