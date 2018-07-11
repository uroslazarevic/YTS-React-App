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
      pageLoader: false
     }
    this.inputSearchTerm = this.inputSearchTerm.bind(this);
  };
 
  inputSearchTerm(event) {
    this.setState({ searchLoader: true, inputTerm: event.target.value }, () => {
      const inputTerm = this.state.inputTerm;
      console.log(inputTerm.length)
      // Condition for not rendering movies if the search string is ''
      inputTerm.length >= 1 ? this.props.searchMovies( { query_term: this.state.inputTerm} )
      .then(() => this.setState({searchLoader: false})) : this.setState({ searchLoader: false })
    });
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
          onChange={this.inputSearchTerm}
          value={this.state.inputTerm}
          placeholder="Quick search"
        />
        <ul className="rendered-movie-list">
         {this.renderMovies()}
        </ul>
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