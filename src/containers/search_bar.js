import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { searchMovies } from 'actions';
import { SearchedMovies, SearchLoader } from 'components';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      inputTerm:'',
      searchLoader: false,
      showMovieList: false
    }
    this.searchBar = React.createRef();
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    this.inputSearchTerm = _.debounce( this.inputSearchTerm.bind(this), 250 );
    this.showMovieList = this.showMovieList.bind(this);
    this.handleSearchTermFocus= this.handleSearchTermFocus.bind(this);
  };

  handleSearchTermChange(event) {
    event.persist();
    const value = event.target.value;
    this.setState({ searchLoader: true, inputTerm: value });
    this.inputSearchTerm(value);
  }
 
  inputSearchTerm(value) {
    // Condition for not rendering movies if the search string is ''
    value.length >= 1 ? this.props.searchMovies( { query_term: value} )
    .then(() => this.setState({ searchLoader: false, showMovieList: true })) : this.setState({ searchLoader: false, showMovieList: false });
  }

  showMovieList(event) {
    this.searchBar.current.contains(event.target) ?  this.setState({ showMovieList: true })
     : this.setState({ showMovieList: false });
  }

  handleSearchTermFocus(event) {
    event.stopPropagation();
    this.setState({ showMovieList: true });
  }

  componentDidMount() {
    document.addEventListener('click', this.showMovieList);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.showMovieList);
  }

  // Need to use this func to reset inputTerm!
  // handleSearchMovieClick() {
  //   this.setState({ inputTerm: '', showMovieList: 'false' });
  // }

  renderMovies() {
    const { searchedMovies } = this.props;

    if(searchedMovies === [] || searchedMovies === undefined) {
      return <div></div>
    }
    
    return searchedMovies.map(movie => {
      return  (
      <SearchedMovies 
        key={movie.id}
        movie={movie} 
      />
    )
    });
  };
  
  render() {
    return (
      <div ref={this.searchBar}>
        { this.state.searchLoader ? <SearchLoader /> : null }
        <span><i className="fas fa-search"></i></span>
        <input 
          onChange={this.handleSearchTermChange}
          value={this.state.inputTerm}
          placeholder="Quick search"
        />
        {this.state.showMovieList && this.state.inputTerm ? 
        <ul className="rendered-movie-list">
         {this.renderMovies()}
        </ul> : null }
      </div>
    );
  }
}

function mapStateToProps({ movies }) {
  return {
    searchedMovies: movies.searchedMovies
  };
}

export default connect(mapStateToProps, { searchMovies  })(SearchBar);