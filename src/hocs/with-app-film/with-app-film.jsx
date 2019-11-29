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

    handleSmallMovieCardClick(id, history) {
      this.setState({
        filmId: id
      });
      history.push(`/films/${id}`);
      // window.console.log(history);
      // window.history.pushState(null, null, `films`);
    }
  }

  return WithAppFilm;
};

export default withAppFilm;
