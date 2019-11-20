import React, {PureComponent} from "react";

const withAppFilm = (Component) => {
  class WithAppFilm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        filmId: -1
      };

      this.handlerSmallMovieCardClick = this.handlerSmallMovieCardClick.bind(this);
    }

    render() {
      return <Component
        {...this.props}
        handlerSmallMovieCardClick={this.handlerSmallMovieCardClick}
        filmId={this.state.filmId}
      />;
    }

    handlerSmallMovieCardClick(id) {
      this.setState({
        filmId: id
      });
      window.history.pushState(null, null, `films-${id}`);
    }
  }

  return WithAppFilm;
};

export default withAppFilm;
