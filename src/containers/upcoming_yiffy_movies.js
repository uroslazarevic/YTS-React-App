import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUpcomingMovies } from 'actions';

class UpcomingYIFYMovies extends Component {
  
  componentWillMount() {
    this.props.getUpcomingMovies();
  };

  renderLatestMovies(){
    const { upcomingMovies } = this.props;
    console.log(upcomingMovies);

  };
  
  render() {
    return (
      <div>
        <div className="latest-torrents-title">Upcoming YIFY Movies</div>
        <div className="row">
          {this.renderLatestMovies()}
        </div>
      </div>
    );
  };
};

function mapStateToProps({ movies }) {
  return { upcomingMovies: movies.upcomingMovies };
};

export default connect(mapStateToProps, { getUpcomingMovies })(UpcomingYIFYMovies);