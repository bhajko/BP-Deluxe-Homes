import React, { Component } from "react";

const ApartmentContext = React.createContext();

class ApartmentProvider extends Component {
  state = {};

  render() {
    return (
      <ApartmentContext.Provider value={"hello"}>
        {this.props.children}
      </ApartmentContext.Provider>
    );
  }
}

const ApartmentConsumer = ApartmentContext.Consumer;

export { ApartmentProvider, ApartmentConsumer, ApartmentContext };
