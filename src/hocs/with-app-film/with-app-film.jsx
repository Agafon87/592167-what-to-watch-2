import React, {PureComponent} from "react";

const withAppFilm = (Component) => {
  class WithAppFilm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        filmId: -1
      };

      this.handleSmallMovieCardClick = this.handleSmallMovieCardClick.bind(this);
    }

    render() {
      return <Component
        {...this.props}
        handleSmallMovieCardClick={this.handleSmallMovieCardClick}
        filmId={this.state.filmId}
      />;
    }

    handleSmallMovieCardClick(id) {
      this.setState({
        filmId: id
      });
      window.history.pushState(null, null, `films-${id}`);
    }
  }

  return WithAppFilm;
};

export default withAppFilm;
