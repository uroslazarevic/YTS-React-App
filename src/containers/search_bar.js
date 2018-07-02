import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SearchMovies } from '../actions';
import SearchedMovies from '../components/searched_movies';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { inputTerm:'' }
    this.inputSearchTerm = this.inputSearchTerm.bind(this);
  }
 
 
  
  inputSearchTerm(e) {
    this.setState({inputTerm: e.target.value}, () => {
      // Condition for not rendering movies if the search string is ''
      this.state.inputTerm ?
      this.props.searchMovies(this.state.inputTerm) : ''
    });
  }

  renderMovies() {
    const { searchedMovies } = this.props;

    if(searchedMovies === [] || searchedMovies === undefined) {
      return <div></div>
    }
    
    return searchedMovies.map(movie => {
      return  <SearchedMovies movie={movie} />
    });
  };
  
  render() {
    return (
      <div>
        <input 
          onChange={this.inputSearchTerm}
          value={this.state.inputTerm}
          placeholder="Quick search"
        />
        <ul>
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

export default connect(mapStateToProps, { searchMovies: SearchMovies  })(SearchBar);