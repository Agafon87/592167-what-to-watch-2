import React, {PureComponent} from "react";

const withMainPage = (Component) => {
  class WithMainPage extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        filmsCount: 8
      };

      this.handlerCatalogMoreClick = this.handlerCatalogMoreClick.bind(this);
    }

    render() {
      return <Component
        {...this.props}
        onCatalogMoreClick={this.handlerCatalogMoreClick}
        filmsCount={this.state.filmsCount}
      />;
    }

    handlerCatalogMoreClick() {
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
