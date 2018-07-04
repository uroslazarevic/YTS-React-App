import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchMovies } from '../actions';
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
      this.props.searchMovies({query_term: this.state.inputTerm}
      ) : null
       
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
    return (
      <div>
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