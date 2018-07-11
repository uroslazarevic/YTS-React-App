import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { searchMovies } from '../actions';
import { SearchLoader } from 'components/loader';
import SearchedMovies from '../components/searched_movies';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      inputTerm:'',
      searchLoader: false,
      pageLoader: false,
      showMovieList: false
     }
    this.inputSearchTerm = this.inputSearchTerm.bind(this);
    this.hideMovieList = this.hideMovieList.bind(this);
    this.showMovieList = this.showMovieList.bind(this);
  };
 
  inputSearchTerm(event) {
    this.setState({ searchLoader: true, inputTerm: event.target.value }, () => {
      const inputTerm = this.state.inputTerm;
      console.log(inputTerm.length)
      // Condition for not rendering movies if the search string is ''
      inputTerm.length >= 1 ? this.props.searchMovies( { query_term: this.state.inputTerm} )
      .then(() => this.setState({ searchLoader: false, showMovieList: true })) : this.setState({ searchLoader: false })
    });
  }

  hideMovieList() {
    this.setState({ showMovieList: false })
  };

  showMovieList() {
    this.state.inputTerm ? this.setState({ showMovieList: true }) : null
  }

  renderMovies() {
    const { searchedMovies } = this.props;

    if(searchedMovies === [] || searchedMovies === undefined) {
      return <div></div>
    }
    
    return searchedMovies.map(movie => {
      return  <SearchedMovies key={movie.id} movie={movie} />
    });
  };
  
  render() {
    const searchLoader = this.state.searchLoader;
    
    return (
      <div>
        <SearchLoader loading={searchLoader} />
        <span><i className="fas fa-search"></i></span>
        <input 
          onFocus={this.showMovieList}
          onBlur={this.hideMovieList} 
          onChange={this.inputSearchTerm}
          value={this.state.inputTerm}
          placeholder="Quick search"
        />
        {this.state.showMovieList ? 
        <ul className="rendered-movie-list">
         {this.renderMovies()}
        </ul> : null }
        
      </div>
    )
  }
}

function mapStateToProps({ movies }) {
  return {
    searchedMovies: movies.searchedMovies
  };
}

export default connect(mapStateToProps, { searchMovies  })(SearchBar);