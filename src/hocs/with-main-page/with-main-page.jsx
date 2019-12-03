import React, {PureComponent} from "react";

const withMainPage = (Component) => {
  class WithMainPage extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        filmsCount: 8
      };

      this.handleCatalogMoreClick = this.handleCatalogMoreClick.bind(this);
    }

    render() {
      return <Component
        {...this.props}
        onCatalogMoreClick={this.handleCatalogMoreClick}
        filmsCount={this.state.filmsCount}
      />;
    }

    handleCatalogMoreClick() {
      this.setState((prevState) => {
        return {
          filmsCount: prevState.filmsCount + 20
        };
      });
    }
  }

  return WithMainPage;
};

export default withMainPage;
