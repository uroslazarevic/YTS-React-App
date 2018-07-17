import React,{ Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { browseMovies } from 'actions';
import { RenderMovieCard, BrowseMoviesSearch, PageLoader } from 'components';

class BrowseMovies extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      pageLoader: false,
      data: {
        query_term: '',
        quality: '',
        minimum_rating: '',
        sort_by: '',
        order_by: ''
      }
    };

    this.getParams = this.getParams.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBrowsedMovies = this.handleBrowsedMovies.bind(this);
  }

  getParams(event) {
    const { target } = event;
    this.setState({ data: {...this.state.data, [target.name]: target.value }})
  }

  renderHelper() {
    const { searchedMovies: { movies, movie_count } } = this.props;
    return (
      <div>
        <div className="browse-movies-title">{movie_count} YIFFY MOVIES FOUND</div>

        {_.chunk(movies, 4).map(
          (movieArrayOfFour, index) => {
    
          const renderArray = () => {
            return movieArrayOfFour.map( movie => {
              const { genres } = movie;
              return (
                <RenderMovieCard
                  key={movie.id}
                  movie={movie}
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
        })}
      </div>
    )
  }

  handleSubmit(event) {
    event.preventDefault();
    this.handleBrowsedMovies()
  }

  handleBrowsedMovies() {
    this.setState({ pageLoader: true, listMovies: false })
    const { browseMovies } = this.props;
    browseMovies(this.state.data)
    .then(() => this.setState({ pageLoader: false }));
  }

  initialize() {
    const { pathname } = this.props.location;
    const searchString = pathname.split('/');
    // if searchString.length > 2 , searchString[2] === url after browse-movies
    searchString.length === 3 ? this.setState({ data: { query_term: searchString[2]  }}, 
    () => this.handleBrowsedMovies()) : this.handleBrowsedMovies()
    console.log(searchString)
  }
  
  componentWillMount() {
    this.initialize();
  }

 render() {
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
            {this.renderHelper()}
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