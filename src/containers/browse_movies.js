import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { browseMovies } from 'actions';
import { RenderMovieCard, BrowseMoviesSearch, PageLoader } from 'components';
import Pagination from 'components/pagination';

class BrowseMovies extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      pageLoader: false,
      pagination: false,
      data: {
        query_term: '',
        quality: '',
        genre:'',
        minimum_rating: '',
        sort_by: '',
        order_by: '',
        limit: 20,
        page: 1
      }
    };

    // Ukloni pojavu viska istih filmova!
    
    this.getParams = this.getParams.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBrowsedMovies = this.handleBrowsedMovies.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  getParams(event) {
    const { target } = event;
    this.setState({ data: {...this.state.data, [target.name]: target.value }})
  }

  renderHelper() {
    const { searchedMovies: { movies } } = this.props;
    const uniqueMovies = _.map(_.uniqBy(movies, 'id'), movie => {
      return {
        movie
      };  
  });
    return _.chunk(uniqueMovies, 4).map(
      (movieArrayOfFour, index) => {
  
        const renderArray = () => {
          return movieArrayOfFour.map( movie => {
            const { id, genres } = movie.movie;
            return (
              <RenderMovieCard
                key={id}
                movie={movie.movie}
                genres={genres}
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
    )
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({data: { ...this.state.data, page: 1}})
    this.handleBrowsedMovies()
  }

  handleBrowsedMovies() {
    this.setState({ pageLoader: true })
    const { browseMovies } = this.props;
    browseMovies(this.state.data)
    .then(() => this.setState({ pageLoader: false, pagination: true }));
  }

  initialize() {
    const { pathname } = this.props.location;
    const searchString = pathname.split('/');
    // if searchString.length > 2 , searchString[2] === url after browse-movies
    searchString.length === 3 ? this.setState({ data: { ...this.state.data, query_term: searchString[2] }}, 
    () => this.handleBrowsedMovies()) : this.handleBrowsedMovies()
  }

  handlePageClick({ selected }) {
    const nextPage = selected + 1;
    this.setState({ data: { ...this.state.data, page: nextPage }}, 
    () => this.handleBrowsedMovies(this.state.data))
  }
  
  componentWillMount() {
    this.initialize();
  }

 render() {
   const { searchedMovies: { movie_count } } = this.props;
   const { pagination } = this.state;
   const pageCount = Math.ceil(movie_count/this.state.data.limit);
   return (
    <div className="browse-movies">
      { this.state.pageLoader && <PageLoader /> }
      <div className="browse-movies-search">
        <div className="content-wrapper">
          <BrowseMoviesSearch 
            data={this.state.data}
            handleSubmit = {this.handleSubmit}
            getParams = {this.getParams}
          />
        </div>
      </div>
      <div className="browse-movies-content">
        <div className="content-wrapper">
          <div className="row">
            <div className="browse-movies-title">{movie_count} YIFFY MOVIES FOUND</div>
            {pagination && 
            <Pagination 
              pageCount={pageCount}
              handlePageClick={this.handlePageClick}
              forcePage={this.state.data.page -1}
            />}
            {this.renderHelper()}
            {pagination && 
            <Pagination 
              pageCount={pageCount}
              handlePageClick={this.handlePageClick}
              forcePage={this.state.data.page -1}
            />}
          </div>
        </div>
      </div>
    </div>
   )
 }
};

function mapStateToProps({ movies }) {
  return {searchedMovies: movies.browseMovies}
}

export default connect(mapStateToProps, { browseMovies })(BrowseMovies)